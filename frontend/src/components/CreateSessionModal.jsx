import { Code2Icon, LoaderIcon, PlusIcon, XIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";

function CreateSessionModal({ isOpen, onClose, roomConfig, setRoomConfig, onCreateRoom, isCreating }) {
  const problems = Object.values(PROBLEMS);
  if (!isOpen) return null;

  return (
    <div className="fb-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="fb-modal">
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <h3 className="fb-modal-title" style={{ margin: 0 }}>Create New Session</h3>
          <button className="fb-btn-ghost" onClick={onClose} style={{ padding: "0.375rem" }}>
            <XIcon size={16} />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {/* Problem selection */}
          <div>
            <label className="fb-label">
              Select Problem <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <select
              className="fb-select"
              value={roomConfig.problem}
              onChange={(e) => {
                const selectedProblem = problems.find((p) => p.title === e.target.value);
                setRoomConfig({ difficulty: selectedProblem.difficulty, problem: e.target.value });
              }}
            >
              <option value="" disabled>Choose a coding problem...</option>
              {problems.map((problem) => (
                <option key={problem.id} value={problem.title}>
                  {problem.title} ({problem.difficulty})
                </option>
              ))}
            </select>
          </div>

          {/* Summary */}
          {roomConfig.problem && (
            <div style={{
              background: "rgba(227,179,51,0.06)",
              border: "1px solid rgba(227,179,51,0.2)",
              borderRadius: 10,
              padding: "1rem 1.125rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.625rem"
            }}>
              <Code2Icon size={16} color="#e3b333" style={{ marginTop: 2, flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#e3b333", marginBottom: "0.25rem" }}>Room Summary</p>
                <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Problem: <span style={{ color: "#fff" }}>{roomConfig.problem}</span></p>
                <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>Max Participants: <span style={{ color: "#fff" }}>2 (1-on-1 session)</span></p>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.625rem", marginTop: "1.75rem" }}>
          <button className="fb-btn-ghost" onClick={onClose}>Cancel</button>
          <button
            className="fb-btn-primary"
            onClick={onCreateRoom}
            disabled={isCreating || !roomConfig.problem}
          >
            {isCreating ? <LoaderIcon size={15} style={{ animation: "spin 0.7s linear infinite" }} /> : <PlusIcon size={15} />}
            {isCreating ? "Creating..." : "Create Session"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateSessionModal;
