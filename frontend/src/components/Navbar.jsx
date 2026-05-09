import { Link, useLocation } from "react-router";
import { BookOpenIcon, LayoutDashboardIcon, SparklesIcon } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fb-nav">
      <div className="fb-nav-inner">
        {/* LOGO */}
        <Link to="/" className="fb-logo">
          <div className="fb-logo-icon">
            <SparklesIcon size={16} color="#000" strokeWidth={2.5} />
          </div>
          <span className="fb-logo-text">Talent IQ</span>
          <span style={{ fontSize: "0.75rem", color: "#4b5563", marginLeft: "0.125rem", fontWeight: 400 }}>· Code Together</span>
        </Link>

        <div className="fb-nav-links">
          <Link to="/problems" className={`fb-nav-link ${isActive("/problems") ? "active" : ""}`}>
            <BookOpenIcon size={14} />
            <span>Problems</span>
          </Link>
          <Link to="/dashboard" className={`fb-nav-link ${isActive("/dashboard") ? "active" : ""}`}>
            <LayoutDashboardIcon size={14} />
            <span>Dashboard</span>
          </Link>
          <div style={{ marginLeft: "0.5rem" }}>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                }
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
