import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-green-50 py-4 px-2">
      <div className="w-full flex justify-center">
        <div className="relative bg-white/90 backdrop-blur-md shadow-md px-6 py-3 rounded-full flex items-center gap-4 text-sm md:text-base font-medium text-gray-800 max-w-full">
          {/* Hamburger button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Menu Links */}
          <div
            className={`absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-md p-4 flex flex-col gap-3 md:static md:w-auto md:bg-transparent md:shadow-none md:p-0 md:flex-row md:items-center md:gap-x-4 md:gap-y-0 ${
              open ? 'block' : 'hidden md:flex'
            }`}
          >
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="hover:text-green-700 transition-colors duration-300"
            >
              Beranda
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="hover:text-green-700 transition-colors duration-300"
            >
              Tentang
            </Link>
            <Link
              to="/prevention"
              onClick={() => setOpen(false)}
              className="hover:text-green-700 transition-colors duration-300"
            >
              Solusi
            </Link>
            <Link
              to="/kalkulatorgizi"
              onClick={() => setOpen(false)}
              className="hover:text-green-700 transition-colors duration-300"
            >
              Kalkulator Gizi
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-green-700 transition-colors duration-300"
            >
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
