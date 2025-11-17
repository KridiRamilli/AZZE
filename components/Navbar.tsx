"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu as Menu, IoMdClose as X } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full bg-white shadow-sm z-50'>
      <div className='max-w-7xl mx-auto px-6 flex items-center justify-between h-20'>
        {/* LOGO */}
        <div className='flex items-center gap-2'>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={135}
            height={135}
            className='object-contain'
          />
        </div>

        {/* NAV LINKS (Desktop) */}
        <div className='hidden md:flex items-center space-x-8'>
          <Link
            href='/products'
            className='nav-link text-gray-700 hover:text-gray-900 transition'
          >
            Why AZZE?
          </Link>
          <Link
            href='/security'
            className='nav-link text-gray-700 hover:text-gray-900 transition'
          >
            Security
          </Link>
          <Link
            href='/docs'
            className='nav-link text-gray-700 hover:text-gray-900 transition'
          >
            Docs
          </Link>
        </div>

        {/* BUTTON (Desktop) */}
        <div className='hidden md:block'>
          <Link
            href='/app'
            className='px-5 py-2 bg-fuchsia-500 text-white rounded-full animate-radius'
          >
            Launch App
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className='md:hidden text-gray-800'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {menuOpen && (
        <div className='md:hidden bg-white border-t border-gray-200 shadow-lg'>
          <div className='flex flex-col px-6 py-4 space-y-4'>
            <Link
              href='/'
              className='text-gray-800 hover:text-fuchsia-500 transition'
              onClick={() => setMenuOpen(false)}
            >
              Why AZZE?
            </Link>
            <Link
              href='/about'
              className='text-gray-800 hover:text-fuchsia-500 transition'
              onClick={() => setMenuOpen(false)}
            >
              Security
            </Link>
            <Link
              href='/docs'
              className='text-gray-800 hover:text-fuchsia-500 transition'
              onClick={() => setMenuOpen(false)}
            >
              Docs
            </Link>

            <Link
              href='/app'
              className='px-5 py-2 text-center bg-fuchsia-500 text-white animate-radius'
              onClick={() => setMenuOpen(false)}
            >
              Launch App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
