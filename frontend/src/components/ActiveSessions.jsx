import {
  ArrowRightIcon, Code2Icon, CrownIcon, SparklesIcon,
  UsersIcon, ZapIcon, LoaderIcon,
} from "lucide-react";
import { Link } from "react-router";
import { getDifficultyBadgeClass } from "../lib/utils";

function getDifficultyStyle(difficulty) {
  const d = difficulty?.toLowerCase();
  if (d === "easy") return "fb-badge fb-badge-easy";
  if (d === "medium") return "fb-badge fb-badge-medium";
  if (d === "hard") return "fb-badge fb-badge-hard";
  return "fb-badge fb-badge-gray";
}

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <div className="fb-card lg:col-span-2 fb-card-gold" style={{ height: "100%" }}>
      <div style={{ padding: "1.5rem" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div style={{ width: 32, height: 32, background: "#e3b333", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ZapIcon size={14} color="#000" strokeWidth={2.5} />
            </div>
            <h2 style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.015em" }}>Live Sessions</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
            <span style={{ fontSize: "0.8rem", color: "#22c55e", fontWeight: 600 }}>{sessions.length} active</span>
          </div>
        </div>

        {/* Sessions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", maxHeight: 380, overflowY: "auto", paddingRight: "0.25rem" }}>
          {isLoading ? (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "4rem 0" }}>
              <div className="fb-spinner" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div key={session._id} className="fb-card" style={{ border: "1px solid #1f2937" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", padding: "1rem 1.25rem" }}>
                  {/* Left */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", flex: 1, minWidth: 0 }}>
                    <div style={{ position: "relative", width: 44, height: 44, background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Code2Icon size={18} color="#e3b333" />
                      <span style={{ position: "absolute", top: -3, right: -3, width: 10, height: 10, background: "#22c55e", borderRadius: "50%", border: "2px solid #111" }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                        <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{session.problem}</h3>
                        <span className={getDifficultyStyle(session.difficulty)}>
                          {session.difficulty?.slice(0, 1).toUpperCase() + session.difficulty?.slice(1)}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", fontSize: "0.78rem", color: "#6b7280" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                          <CrownIcon size={11} color="#e3b333" />
                          {session.host?.name}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                          <UsersIcon size={11} />
                          {session.participant ? "2/2" : "1/2"}
                        </span>
                        {session.participant && !isUserInSession(session) ? (
                          <span className="fb-badge fb-badge-red">Full</span>
                        ) : (
                          <span className="fb-badge fb-badge-green">Open</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Join btn */}
                  {session.participant && !isUserInSession(session) ? (
                    <button className="fb-btn-ghost" style={{ fontSize: "0.8rem", opacity: 0.4, cursor: "not-allowed" }} disabled>Full</button>
                  ) : (
                    <Link to={`/session/${session._id}`} className="fb-btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem", whiteSpace: "nowrap" }}>
                      {isUserInSession(session) ? "Rejoin" : "Join"}
                      <ArrowRightIcon size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="fb-empty">
              <div className="fb-empty-icon">
                <SparklesIcon size={22} />
              </div>
              <p className="fb-empty-title">No active sessions</p>
              <p className="fb-empty-desc">Be the first to create one!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ActiveSessions;
