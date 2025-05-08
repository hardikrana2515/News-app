import React, { Component } from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
      <nav className="bg-gray-600 sticky top-0 z-50 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-end">
            <img
              className="h-15 w-auto overflow-hidden rounded-full"
              src="/src/assets/ChatGPT Image Apr 15, 2025, 03_32_57 PM.png"
              alt="World News"
            />
          </div>
          <div className="hidden sm:flex space-x-4">
          <Link  to="/About" className="text-white px-3 py-2 rounded-md bg-gray-600 hover:bg-gray-800 text-sm font-medium">
            About
            </Link>
            <Link to="/" className="text-white px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm font-medium">
              Dashboard
           </Link>
            <Link to="/business" className="text-white px-3 py-2 rounded-md bg-gray-600 hover:bg-gray-800 text-sm font-medium">
            Business
            </Link>
            <Link to="/entertainment" className="text-white px-3 py-2 rounded-md bg-gray-600 hover:bg-gray-800 text-sm font-medium">
            Entertainment
            </Link>
            <Link to="/health" className="text-white px-3 py-2 rounded-md bg-gray-600 hover:bg-gray-800 text-sm font-medium">
            Health
            </Link>
            <Link to="/science" className="text-white px-3 py-2 rounded-md bg-gray-600 hover:bg-gray-800 text-sm font-medium">
            Science
            </Link>
            <Link to="/sports" className="text-white px-3 py-2 rounded-md bg-gray-600 hover:bg-gray-800 text-sm font-medium">
            Sports
            </Link>
            <Link to="/technology" className="text-white px-3 py-2 rounded-md bg-gray-600 hover:bg-gray-800 text-sm font-medium">
            Technology
            </Link>

          </div>
        </div>
      </div>
    </nav>
    
    )
  }

  export default Navbar
