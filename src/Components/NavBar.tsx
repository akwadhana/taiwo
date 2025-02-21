import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { FiSearch } from "react-icons/fi";

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    <nav className="bg-white relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="lg:mb-1">
            <Link to="/Home">
              <img className="h-5 md:ml-30" src={Logo} alt="Logo " />
            </Link>
          </div>

          <div className="hidden md:flex md:flex-1 lg:text-center lg:justify-center space-x-6">
            <Link to="/Home" className="px-3 py-2 text-[#3B3C4A] text-sm font-medium relative border-b-2 border-transparent focus:border-black hover:border-black transition-all duration-300 outline-none focus:ring-2 focus:ring-black">Home</Link>
            <Link to="/Blogs" className="px-3 py-2 text-[#3B3C4A] text-sm font-medium relative inline-block after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">Blog</Link>
            <Link to="/SinglePost" className="px-3 py-2 text-[#3B3C4A] text-sm font-medium relative inline-block after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">Single Post</Link>
            

          <Link to="/Page" className="px-3 py-2 text-[#3B3C4A] text-sm font-medium relative inline-block after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">Page</Link>
          <Link to="/Auth/Login" className="px-3 py-2 text-[#3B3C4A] text-sm font-medium" onClick={toggleMobileMenu}>Login</Link>
          <Link to="/Auth/Register" className="px-3 py-2 text-[#3B3C4A] text-sm font-medium" onClick={toggleMobileMenu}>SignUp</Link>
            <div className="px-3 py-2 text-[#3B3C4A] text-sm font-medium relative inline-block after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">Contact</div>
            
            <form onSubmit={handleSearchSubmit} className="flex items-center relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-3 py-2 text-sm text-[#A1A1AA]  lg:ml-60 outline-none bg-[#F4F4F5] rounded-md"
              />
            </form>
            <FiSearch className="absolute lg:right-45 right-10 bottom-6 text-[#52525B]" />
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-[#3B3C4A] hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
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
        <div className="fixed inset-0 bg-white bg-opacity-50 z-10" onClick={toggleMobileMenu}></div>
      )}

      <div className={`fixed mt-3 top-0 left-0 h-full w-64 bg-white text-white transform transition-transform duration-1000 ease-in-out z-20 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-[#3B3C4A]">
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
          <Link to="/Home" className="block px-3 text-[#3B3C4A] py-2 text-sm font-medium"  onClick={toggleMobileMenu}>Home</Link>
          <Link to="/Blogs" className="block px-3 text-[#3B3C4A] py-2 text-sm font-medium " onClick={toggleMobileMenu}>Blog</Link>
          <Link to="/SinglePost" className="block px-3 text-[#3B3C4A] py-2 text-sm font-medium"onClick={toggleMobileMenu}>Single Post</Link>
          <Link to="/Page" className="block px-3 text-[#3B3C4A] py-2 text-sm font-medium"onClick={toggleMobileMenu}>Page</Link>
          <div className="block px-3 text-[#3B3C4A] py-2 text-sm font-medium"onClick={toggleMobileMenu}>Contact</div>
          <div className="flex flex-col">
          <Link to="/Auth/Login" className="px-3 py-2 text-[#3B3C4A] text-sm font-medium" onClick={toggleMobileMenu}>Login</Link>
          <Link to="/Auth/Register" className="px-3 py-2 text-[#3B3C4A] text-sm font-medium" onClick={toggleMobileMenu}>SignUp</Link>
          </div>
       
          
          <form onSubmit={handleSearchSubmit} className="mt-4 px-3">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-3 py-2 text-sm text-[#A1A1AA] outline-none bg-[#F4F4F5] rounded-md"

            />
          </form>
          <FiSearch className="absolute lg:right-45 right-10 top-97 text-[#52525B]" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
