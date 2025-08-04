import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/about" },
    { label: "Solusi", href: "/prevention" },
    { label: "Kalkulator Gizi", href: "/kalkulatorgizi" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-green-50 py-4 px-4">
      <div className="w-full flex justify-between items-center">
        {/* Desktop nav - oval */}
        <div className="hidden md:flex bg-white/90 backdrop-blur-md shadow-md px-8 py-3 rounded-full space-x-6 text-sm md:text-base font-medium text-gray-800 mx-auto">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="hover:text-green-700 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile nav button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 bg-white rounded-full shadow-md"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          {open && (
            <div className="absolute right-4 mt-2 bg-white shadow-lg rounded-xl p-4 space-y-3 z-50">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-gray-700 hover:text-green-700 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
