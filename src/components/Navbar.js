import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile_icon from "../assests/profile_icon.png";
import Med_icon from "../assests/medical_logo.png";

function Navbar({ handleLogout }) {
  const navigate = useNavigate();
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <nav className="bg-gray-700 shadow-lg nav_print">
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={Med_icon} className="w-16 h-14 mr-2" alt="Medical Logo" />
          <span className="text-white text-lg font-bold tracking-wider uppercase">
            Medical
          </span>
        </Link>
        <div className="flex items-center">
          <Link
            to="/dbData"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out mr-4"
          >
            View Records
          </Link>
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
              className="focus:outline-none"
            >
              <img
                src={Profile_icon}
                alt="Profile"
                className="w-10 h-10 rounded-full shadow-md cursor-pointer"
              />
            </button>
            {isProfileDropdownOpen && (
              <div className="absolute top-14 right-0 bg-white border rounded-lg shadow-md py-2">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </Link>
                <hr className="border-t border-gray-300" />
                <button
                  onClick={handleLogoutClick}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
