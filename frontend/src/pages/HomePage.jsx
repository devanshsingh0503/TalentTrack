import { Link } from "react-router";
import {
  ArrowRightIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <div style={{ background: "#000000", minHeight: "100vh", color: "#fff", fontFamily: "'Inter', sans-serif" }}>

      {/* NAVBAR */}
      <nav className="fb-nav">
        <div className="fb-nav-inner">
          <Link to="/" className="fb-logo">
            <div className="fb-logo-icon">
              <SparklesIcon size={16} color="#000" strokeWidth={2.5} />
            </div>
            <span className="fb-logo-text">Talent IQ</span>
          </Link>
          <SignInButton mode="modal">
            <button className="fb-btn-primary">
              Get Started
              <ArrowRightIcon size={14} />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO */}
      <div className="fb-container fb-hero">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
             className="fb-hero-grid">
          {/* LEFT */}
          <div>
            <div className="fb-hero-eyebrow">
              <ZapIcon size={12} />
              Real-time Collaboration
            </div>
            <h1 className="fb-hero-title">
              Code Together,<br />
              <span className="gold">Learn Together</span>
            </h1>
            <p className="fb-hero-desc">
              The ultimate platform for collaborative coding interviews and pair programming.
              Connect face-to-face, code in real-time, and ace your technical interviews.
            </p>

            {/* Pills */}
            <div className="fb-hero-pills">
              <span className="fb-hero-pill"><span className="dot" />Live Video Chat</span>
              <span className="fb-hero-pill"><span className="dot" />Code Editor</span>
              <span className="fb-hero-pill"><span className="dot" />Multi-Language</span>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <SignInButton mode="modal">
                <button className="fb-btn-primary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.9375rem" }}>
                  Start Coding Now
                  <ArrowRightIcon size={16} />
                </button>
              </SignInButton>
              <button className="fb-btn-secondary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.9375rem" }}>
                <VideoIcon size={16} />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="fb-stats">
              <div className="fb-stat">
                <div className="fb-stat-value">10K+</div>
                <div className="fb-stat-label">Active Users</div>
              </div>
              <div className="fb-stat">
                <div className="fb-stat-value">50K+</div>
                <div className="fb-stat-label">Sessions</div>
              </div>
              <div className="fb-stat">
                <div className="fb-stat-value">99.9%</div>
                <div className="fb-stat-label">Uptime</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Code Preview Card */}
          <div style={{ position: "relative" }}>
            <div className="fb-card" style={{
              background: "#0b0b0b",
              borderColor: "#1f2937",
              overflow: "hidden",
              boxShadow: "0 0 80px rgba(227,179,51,0.07)"
            }}>
              {/* Window chrome */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1rem", borderBottom: "1px solid #1f2937" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", display: "block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", display: "block" }} />
                <span style={{ marginLeft: "0.5rem", fontSize: "0.75rem", color: "#4b5563", fontFamily: "monospace" }}>solution.js</span>
              </div>
              {/* Code */}
              <div style={{ padding: "1.25rem 1.5rem", fontFamily: "monospace", fontSize: "0.8125rem", lineHeight: 1.8, color: "#9ca3af" }}>
                <div><span style={{ color: "#e3b333" }}>function</span> <span style={{ color: "#60a5fa" }}>twoSum</span>(nums, target) {"{"}</div>
                <div style={{ paddingLeft: "1.5rem" }}><span style={{ color: "#e3b333" }}>const</span> map = {"{}"};</div>
                <div style={{ paddingLeft: "1.5rem" }}><span style={{ color: "#e3b333" }}>for</span> (<span style={{ color: "#e3b333" }}>let</span> i = 0; i {"<"} nums.length; i++) {"{"}</div>
                <div style={{ paddingLeft: "3rem" }}><span style={{ color: "#e3b333" }}>const</span> comp = target - nums[i];</div>
                <div style={{ paddingLeft: "3rem" }}><span style={{ color: "#e3b333" }}>if</span> (map[comp] !== <span style={{ color: "#60a5fa" }}>undefined</span>)</div>
                <div style={{ paddingLeft: "4.5rem" }}><span style={{ color: "#e3b333" }}>return</span> [map[comp], i];</div>
                <div style={{ paddingLeft: "3rem" }}>map[nums[i]] = i;</div>
                <div style={{ paddingLeft: "1.5rem" }}>{"}"}</div>
                <div>{"}"}</div>
              </div>
              {/* Output bar */}
              <div style={{ borderTop: "1px solid #1f2937", padding: "0.75rem 1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#22c55e" }}>✓ All tests passed</span>
                <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "#4b5563" }}>Runtime: 48ms</span>
              </div>
            </div>
            {/* Floating badges */}
            <div style={{ position: "absolute", top: "1rem", right: "-1rem", background: "#111", border: "1px solid #1f2937", borderRadius: 8, padding: "0.5rem 0.75rem", display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.75rem", fontWeight: 600, color: "#e3b333" }}>
              <UsersIcon size={12} /> 2 coding live
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="fb-divider" />

      {/* FEATURES */}
      <div className="fb-container fb-section">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="fb-section-tag" style={{ margin: "0 auto 1rem" }}>Features</div>
          <h2 className="fb-section-title">Everything You Need to <span style={{ color: "#e3b333" }}>Succeed</span></h2>
          <p className="fb-section-desc" style={{ margin: "0 auto" }}>
            Powerful features designed to make your coding interviews seamless and productive.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {[
            { icon: <VideoIcon size={20} />, title: "HD Video Call", desc: "Crystal clear video and audio for seamless communication during interviews." },
            { icon: <Code2Icon size={20} />, title: "Live Code Editor", desc: "Collaborate in real-time with syntax highlighting and multiple language support." },
            { icon: <UsersIcon size={20} />, title: "Easy Collaboration", desc: "Share your screen, discuss solutions, and learn from each other in real-time." },
          ].map((f, i) => (
            <div key={i} className="fb-card fb-card-gold" style={{ padding: "1.75rem" }}>
              <div className="fb-feature-icon">{f.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>{f.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="fb-divider" />

      {/* FOOTER */}
      <div className="fb-footer">
        <div className="fb-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className="fb-logo">
            <div className="fb-logo-icon">
              <SparklesIcon size={14} color="#000" strokeWidth={2.5} />
            </div>
            <span className="fb-logo-text">Talent IQ</span>
          </div>
          <p style={{ fontSize: "0.8rem", color: "#4b5563" }}>© 2025 Talent IQ. Code Together, Learn Together.</p>
        </div>
      </div>

      {/* Mobile grid fix */}
      <style>{`
        @media (max-width: 900px) {
          .fb-hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 680px) {
          .fb-hero-grid > div:last-child { display: none; }
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

export default HomePage;
