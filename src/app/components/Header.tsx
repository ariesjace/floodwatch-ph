"use client"

import Link from "next/link"
import React, { useState } from "react"
import { Menu, X, Search } from "lucide-react" // npm install lucide-react

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-gray-300 relative">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-none">
          <span className="text-blue-800">flood</span>
          <span className="text-yellow-400">watch</span>
          <span className="text-red-600">.ph</span>
        </h1>
      </Link>

      {/* Desktop Navbar */}
      <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-6 text-sm sm:text-base font-medium">
          <li><Link href="/" className="hover:text-blue-800">Home</Link></li>
          <li><Link href="/articles" className="hover:text-blue-800">Articles</Link></li>
          <li><Link href="/community" className="hover:text-blue-800">Community</Link></li>
          <li><Link href="/about" className="hover:text-blue-800">About</Link></li>
        </ul>
      </nav>

      {/* Search Bar (Desktop Only) */}
      <div className="hidden md:flex items-center space-x-2 ml-auto">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-2 text-gray-600 hover:text-blue-800">
          <Search size={20} />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center text-gray-700 ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 py-6 text-lg font-medium">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/articles" onClick={() => setIsOpen(false)}>Articles</Link></li>
            <li><Link href="/community" onClick={() => setIsOpen(false)}>Community</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          </ul>

          {/* Mobile Search Bar */}
          <div className="flex items-center space-x-2 px-6 pb-4">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 text-gray-600 hover:text-blue-800">
              <Search size={20} />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header