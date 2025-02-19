import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { useTheme } from "../assets/Context/ThemeContext";
import { FiSearch } from "react-icons/fi";

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to="/Home">
              <img className="h-5 md:ml-30" src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className="hidden md:flex md:flex-1 lg:text-center lg:justify-center space-x-6">
            <Link to="/Home" className="px-3 py-2 text-[#3B3C4A] dark:text-gray-300 text-sm font-medium relative border-b-2 border-transparent focus:border-black hover:border-black transition-all duration-300 outline-none focus:ring-2 focus:ring-black">Home</Link>
            <Link to="/Blogs" className="px-3 py-2 text-[#3B3C4A] dark:text-gray-300 text-sm font-medium relative inline-block after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">Blog</Link>
            <Link to="/SinglePost" className="px-3 py-2 text-[#3B3C4A] dark:text-gray-300 text-sm font-medium relative inline-block after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">Single Post</Link>
            <Link to="/Page" className="px-3 py-2 text-[#3B3C4A] dark:text-gray-300 text-sm font-medium relative inline-block after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">Page</Link>
            <div className="px-3 py-2 text-[#3B3C4A] dark:text-gray-300 text-sm font-medium relative inline-block after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">Contact</div>
            
            <form onSubmit={handleSearchSubmit} className="flex items-center relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-3 py-2 text-sm text-[#A1A1AA] lg:ml-60 outline-none  bg-[#F4F4F5] rounded-md"
                
              />
            </form>
            <FiSearch  className="absolute right-72 bottom-6 text-[#52525B]"/>

            <button onClick={toggleTheme} className="px-4 py-2 text-sm font-medium text-black dark:text-white bg-primary dark:bg-gray-700 rounded-md">
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-primary dark:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-[#3B3C4A] dark:text-gray-300 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transition-transform ${isMobileMenuOpen ? "rotate-45" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-800 bg-opacity-50 z-10" onClick={toggleMobileMenu}></div>
      )}

      <div className={`fixed mt-3 top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 text-white transform transition-transform duration-1000 ease-in-out z-20 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-[#3B3C4A] dark:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex-shrink-0 mt-5">
          <Link to="/home">
            <img className="h-5 px-3" src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="px-2 mt-10 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/Home" className="block px-3 text-[#3B3C4A] dark:text-gray-300 py-2 text-sm font-medium">Home</Link>
          <Link to="/Blogs" className="block px-3 text-[#3B3C4A] dark:text-gray-300 py-2 text-sm font-medium">Blog</Link>
          <Link to="/SinglePost" className="block px-3 text-[#3B3C4A] dark:text-gray-300 py-2 text-sm font-medium">Single Post</Link>
          <Link to="/Page" className="block px-3 text-[#3B3C4A] dark:text-gray-300 py-2 text-sm font-medium">Page</Link>
          <div className="block px-3 text-[#3B3C4A] dark:text-gray-300 py-2 text-sm font-medium">Contact</div>
          
          <form onSubmit={handleSearchSubmit} className="mt-4 px-3">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-3 py-2 text-sm text-[#3B3C4A] dark:text-gray-300 dark:bg-gray-700 border border-[#3B3C4A] dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B3C4A] dark:focus:ring-gray-500"
            />
          </form>
          <button onClick={toggleTheme} className="px-4 py-2 text-sm font-medium text-black dark:text-white bg-primary dark:bg-gray-700 rounded-md">
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
