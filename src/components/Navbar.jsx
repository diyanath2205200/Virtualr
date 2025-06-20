import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
import { Menu, X, Sun, Moon } from "lucide-react";
import AuthDrawer from "./AuthDrawer";

const Navbar = ({ isDark, onToggleTheme }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const openAuth = () => {
    setAuthOpen(true);
    setMobileDrawerOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileDrawerOpen(false);
    }
  };

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      const yOffset = -100;
      const y = hero.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileDrawerOpen(false);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              className="flex items-center flex-shrink-0 cursor-pointer"
              onClick={scrollToHero}
            >
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl font-semibold">VirtualR</span>
            </div>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href.slice(1))}
                    className="hover:text-orange-500 hover:drop-shadow-[0_1px_1px_rgba(255,115,0,0.5)] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button onClick={onToggleTheme} className="text-xl p-2">
                {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
              </button>
              <button
                onClick={openAuth}
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white"
              >
                Create Account
              </button>
            </div>

            {/* Mobile menu */}
            <div className="lg:hidden">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          {mobileDrawerOpen && (
            <div className="fixed top-0 right-0 z-40 bg-neutral-900 w-full h-screen p-12 flex flex-col items-center lg:hidden">
              <button onClick={toggleNavbar} className="self-end text-white">
                <X size={28} />
              </button>
              <ul className="flex flex-col items-center mt-12 space-y-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href.slice(1))}
                      className="text-white hover:text-orange-500 hover:drop-shadow-[0_1px_1px_rgba(255,115,0,0.5)] transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col space-y-4">
                <button
                  onClick={onToggleTheme}
                  className="flex items-center justify-center gap-2 py-2 px-6 rounded-md text-white border border-white"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  {isDark ? "Light Mode" : "Dark Mode"}
                </button>
                <button
                  onClick={openAuth}
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-6 rounded-md text-white"
                >
                  Create Account
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Auth Drawer */}
      {authOpen && <AuthDrawer onClose={() => setAuthOpen(false)} />}
    </>
  );
};

export default Navbar;
