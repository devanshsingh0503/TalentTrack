import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, SparklesIcon, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div style={{ borderBottom: "1px solid #1f2937", background: "#000" }}>
      <div className="fb-container" style={{ padding: "2.5rem 1.5rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.5rem" }}>
              <div className="fb-logo-icon" style={{ width: 28, height: 28 }}>
                <SparklesIcon size={14} color="#000" strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#e3b333", textTransform: "uppercase", letterSpacing: "0.08em" }}>Dashboard</span>
            </div>
            <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "0.375rem" }}>
              Welcome back, <span style={{ color: "#e3b333" }}>{user?.firstName || "there"}</span>
            </h1>
            <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>Ready to level up your coding skills?</p>
          </div>

          <button onClick={onCreateSession} className="fb-btn-primary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.9375rem" }}>
            <ZapIcon size={16} />
            Create Session
            <ArrowRightIcon size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
