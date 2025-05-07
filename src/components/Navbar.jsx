import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import InTouch from "./InTouch"; // ✅ Make sure the file is named correctly

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [showInTouch, setShowInTouch] = useState(false);  // Toggling modal visibility

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const toggleInTouchModal = () => {
    setShowInTouch(!showInTouch);  // Toggle the modal visibility
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-2 sm:px-6 lg:px-8 md:h-15 h-12">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-500 rounded-full opacity-75 custom1-hover"></div>
          <div className="w-4 h-4 -ml-2 bg-red-500 rounded-full opacity-100 custom1-hover"></div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>

        {/* Desktop nav items */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all ${
                activeLink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-600 hover:text-blue-600 after:w-0"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Get In Touch Button */}
        <button
          onClick={toggleInTouchModal}  // Toggle the modal visibility
          className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
        >
          Get In Touch
        </button>
      </div>

      {/* Show InTouch Modal */}
      {showInTouch && <InTouch closeModal={toggleInTouchModal} />}  {/* Pass close function */}
      
      {/* Mobile nav items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-gray-100 border-t py-4">
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleInTouchModal}  // Toggle the modal visibility
              className="w-full bg-blue-600 text-white px-6 py-2.5 mb-2 rounded-lg hover:bg-blue-700 text-sm transition-colors duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
