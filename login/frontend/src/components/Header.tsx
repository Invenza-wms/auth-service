
import { Link } from "react-router-dom";

const Header = () => {
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
          <Link to="/" className="hover:text-invenza-mainAccent">
            Home
          </Link>
          <Link to="/about" className="hover:text-invenza-mainAccent">
            About Us
          </Link>
        </nav>
      </div>

      {/* Right: Search */}
      <div className="flex items-center gap-3">
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
      </div>
    </header>
  );
};

export default Header;