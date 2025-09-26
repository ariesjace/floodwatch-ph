import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 text-center md:text-left">
        
        {/* Left side */}
        <p className="mb-3 md:mb-0">
          © {new Date().getFullYear()} FloodWatch Philippines. All rights reserved.
        </p>

        {/* Center message */}
        <p className="flex items-center space-x-1 mb-3 md:mb-0">
          <span>Made with</span>
          <span className="text-red-500">♥</span>
          <span>for the Philippines</span>
        </p>

        {/* Right side links */}
        <div className="flex space-x-4">
          <Link href="/about" className="hover:text-blue-800">About</Link>
          <Link href="/articles" className="hover:text-blue-800">Articles</Link>
          <Link href="/community" className="hover:text-blue-800">Community</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
