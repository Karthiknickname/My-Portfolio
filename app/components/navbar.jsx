// @flow strict
'use client';

import Link from "next/link";
import { useState } from "react";



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold">
            Karthik S
          </Link>
        </div>

        {/* Animated Hamburger button for mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-gray-400 hover:text-[#16f2b3] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="relative w-6 h-6 block">
            <span
              className={`absolute left-0 top-1 block h-1 w-6 bg-current rounded transition-all duration-300 ${menuOpen ? 'rotate-45 top-3' : ''}`}
            ></span>
            <span
              className={`absolute left-0 top-3 block h-1 w-6 bg-current rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`absolute left-0 top-5 block h-1 w-6 bg-current rounded transition-all duration-300 ${menuOpen ? '-rotate-45 top-3' : ''}`}
            ></span>
          </span>
        </button>

        <ul
          className={`absolute left-0 top-16 z-10 w-full bg-[#222] px-4 py-6 flex-col items-start space-y-2 text-sm transition-all duration-300 md:static md:z-auto md:w-auto md:bg-transparent md:p-0 md:flex md:flex-row md:space-x-1 md:space-y-0 md:opacity-100 ${menuOpen ? 'flex opacity-100' : 'hidden opacity-0'} md:opacity-100`}
          id="navbar-default"
        >
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about" onClick={() => setMenuOpen(false)}>
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience" onClick={() => setMenuOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills" onClick={() => setMenuOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education" onClick={() => setMenuOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog" onClick={() => setMenuOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li> */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects" onClick={() => setMenuOpen(false)}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;