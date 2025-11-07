import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const navigate = useNavigate();
    const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
      navigate("/login"); // Redirect to login
    };
  return (
   <header className="fixed top-0 left-0 right-0 z-50 bg-invenza-navbar text-white px-4 py-2 shadow-md">
  <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-10">
    
    {/* LEFT: Logo */}
    <div className="flex items-center">
      <img
        src="/Invenza.png"
        alt="Logo"
        className="h-10"
        onError={(e) =>
          ((e.target as HTMLImageElement).src =
            "https://placehold.co/100x40/FFFFFF/4F0509?text=INVENZA")
        }
      />
    </div>

    {/* CENTER: Navigation + Future Icons */}
    <nav className="flex gap-10 text-sm font-medium items-center">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1 hover:text-invenza-mainAccent"
        >
          Dashboards
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {dropdownOpen && (
          <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md w-30 py-2 z-10">
            {["Admin", "Manager", "Packer", "Picker", "User"].map((role) => (
              <li key={role}>
                <Link
                  to={`/dashboard/${role.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-invenza-mainAccent hover:text-white"
                >
                  {role}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link to="/" className="hover:text-invenza-mainAccent">Customers</Link>
      <Link to="/" className="hover:text-invenza-mainAccent">Packages</Link>
      <Link to="/" className="hover:text-invenza-mainAccent">Orders</Link>
      <Link to="/" className="hover:text-invenza-mainAccent">WMS</Link>
      {/* Future icons can go here */}
    </nav>

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
  </div>
</header>
  );
};

export default Navbar;