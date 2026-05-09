import { TrophyIcon, UsersIcon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="lg:col-span-1" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Active Sessions */}
      <div className="fb-card fb-card-gold" style={{ padding: "1.25rem 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
          <div style={{ width: 36, height: 36, background: "rgba(227,179,51,0.1)", border: "1px solid rgba(227,179,51,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <UsersIcon size={16} color="#e3b333" />
          </div>
          <span className="fb-badge fb-badge-green">
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
            Live
          </span>
        </div>
        <div style={{ fontSize: "2.25rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{activeSessionsCount}</div>
        <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "0.25rem" }}>Active Sessions</div>
      </div>

      {/* Total Sessions */}
      <div className="fb-card" style={{ padding: "1.25rem 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
          <div style={{ width: 36, height: 36, background: "rgba(255,255,255,0.05)", border: "1px solid #1f2937", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <TrophyIcon size={16} color="#9ca3af" />
          </div>
        </div>
        <div style={{ fontSize: "2.25rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{recentSessionsCount}</div>
        <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "0.25rem" }}>Total Sessions</div>
      </div>
    </div>
  );
}

export default StatsCards;
