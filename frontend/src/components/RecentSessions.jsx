import { Code2, Clock, Users, Trophy, Loader } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

function getDifficultyStyle(difficulty) {
  const d = difficulty?.toLowerCase();
  if (d === "easy") return "fb-badge fb-badge-easy";
  if (d === "medium") return "fb-badge fb-badge-medium";
  if (d === "hard") return "fb-badge fb-badge-hard";
  return "fb-badge fb-badge-gray";
}

function RecentSessions({ sessions, isLoading }) {
  return (
    <div className="fb-card" style={{ marginTop: "1.25rem" }}>
      <div style={{ padding: "1.5rem" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem", paddingBottom: "1rem", borderBottom: "1px solid #1f2937" }}>
          <div style={{ width: 32, height: 32, background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Clock size={14} color="#9ca3af" />
          </div>
          <h2 style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.015em" }}>Your Past Sessions</h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.875rem" }}>
          {isLoading ? (
            <div style={{ gridColumn: "1/-1", display: "flex", justifyContent: "center", alignItems: "center", padding: "4rem 0" }}>
              <div className="fb-spinner" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div key={session._id} className="fb-card" style={{
                border: session.status === "active" ? "1px solid rgba(34,197,94,0.25)" : "1px solid #1f2937",
                background: session.status === "active" ? "rgba(34,197,94,0.04)" : "#111111",
                position: "relative",
              }}>
                {session.status === "active" && (
                  <div style={{ position: "absolute", top: 10, right: 10 }}>
                    <span className="fb-badge fb-badge-green" style={{ fontSize: "0.7rem" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                      Active
                    </span>
                  </div>
                )}
                <div style={{ padding: "1.125rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.875rem" }}>
                    <div style={{ width: 38, height: 38, background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Code2 size={16} color={session.status === "active" ? "#22c55e" : "#e3b333"} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", marginBottom: "0.25rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{session.problem}</h3>
                      <span className={getDifficultyStyle(session.difficulty)} style={{ fontSize: "0.7rem" }}>{session.difficulty}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", fontSize: "0.78rem", color: "#6b7280", marginBottom: "0.875rem" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                      <Clock size={11} />
                      {formatDistanceToNow(new Date(session.createdAt), { addSuffix: true })}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                      <Users size={11} />
                      {session.participant ? "2" : "1"} participant{session.participant ? "s" : ""}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.75rem", borderTop: "1px solid #1f2937" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.06em" }}>Completed</span>
                    <span style={{ fontSize: "0.7rem", color: "#374151" }}>{new Date(session.updatedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="fb-empty" style={{ gridColumn: "1/-1" }}>
              <div className="fb-empty-icon">
                <Trophy size={22} />
              </div>
              <p className="fb-empty-title">No sessions yet</p>
              <p className="fb-empty-desc">Start your coding journey today!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentSessions;
