
import { NavLink, useNavigate } from "react-router-dom";

const UserProfile = () => {
   const navigate = useNavigate();
    const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
      navigate("/login"); // Redirect to login
    };
     const activeClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-invenza-mainAccent font-semibold"
      : "hover:text-invenza-mainAccent";
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-invenza-navbar text-white px-4 py-2 flex w-full justify-between items-center shadow-md">
      {/* Left: Logo + Navigation */}
      <div className="flex items-center gap-8">
        <img
          src="/Invenza.png"
          alt="Logo"
          className="h-10"
          onError={(e) =>
            ((e.target as HTMLImageElement).src =
              "https://placehold.co/100x40/FFFFFF/4F0509?text=INVENZA")
          }
        />
      
        <nav className="flex gap-6 text-sm font-medium">
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>

          <NavLink to="/settings" className={activeClass}>
            Settings
          </NavLink>

          <NavLink to="/dashboard" className={activeClass}>
            Dashboards
          </NavLink>
        </nav>
      </div>
 {/* RIGHT: Search + Logout */}
    <div className="flex items-center gap-4">
      <div className="flex items-center border border-gray-300 rounded-md px-2 bg-white text-black">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none px-2 py-1 w-32"
        />
        <svg
          className="w-5 h-5 text-invenza-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <button
       onClick={handleLogout}
        className="flex items-center gap-2 bg-invenza-success px-3 py-1 rounded-md text-white"
        >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
       </svg>
       Logout
      </button>
    </div>

      </header>
        );
};

export default UserProfile;