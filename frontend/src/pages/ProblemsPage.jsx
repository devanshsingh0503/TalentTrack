import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon } from "lucide-react";

function getDifficultyStyle(difficulty) {
  const d = difficulty?.toLowerCase();
  if (d === "easy") return "fb-badge fb-badge-easy";
  if (d === "medium") return "fb-badge fb-badge-medium";
  if (d === "hard") return "fb-badge fb-badge-hard";
  return "fb-badge fb-badge-gray";
}

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);
  const easyCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardCount = problems.filter((p) => p.difficulty === "Hard").length;

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff" }}>
      <Navbar />

      <div className="fb-container" style={{ padding: "2.5rem 1.5rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div className="fb-section-tag" style={{ display: "inline-flex", marginBottom: "0.75rem" }}>Problems</div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.025em", color: "#fff", marginBottom: "0.5rem" }}>
            Practice Problems
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "#6b7280" }}>
            Sharpen your coding skills with these curated problems
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {[
            { label: "Total", value: problems.length, color: "#e3b333" },
            { label: "Easy", value: easyCount, color: "#22c55e" },
            { label: "Medium", value: mediumCount, color: "#f59e0b" },
            { label: "Hard", value: hardCount, color: "#ef4444" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", background: "#111", border: "1px solid #1f2937", borderRadius: 8 }}>
              <span style={{ fontSize: "1.125rem", fontWeight: 900, color: s.color }}>{s.value}</span>
              <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Problems list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {problems.map((problem, i) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="fb-card" style={{ transition: "all 0.15s", cursor: "pointer" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(227,179,51,0.3)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1f2937";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", padding: "1rem 1.25rem" }}>
                  {/* Left */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", flex: 1, minWidth: 0 }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#374151", minWidth: "1.5rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div style={{ width: 38, height: 38, background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Code2Icon size={16} color="#e3b333" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem", flexWrap: "wrap" }}>
                        <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#fff" }}>{problem.title}</h2>
                        <span className={getDifficultyStyle(problem.difficulty)} style={{ fontSize: "0.7rem" }}>{problem.difficulty}</span>
                      </div>
                      <p style={{ fontSize: "0.78rem", color: "#6b7280" }}>{problem.category}</p>
                    </div>
                  </div>

                  {/* Right */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#e3b333", fontSize: "0.8125rem", fontWeight: 600, flexShrink: 0 }}>
                    <span>Solve</span>
                    <ChevronRightIcon size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;
