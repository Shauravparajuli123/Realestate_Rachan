import React, { useState } from 'react';
import { navItems } from '../constants/index.jsx';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className='sticky bg-white top-0 z-50 py-3 backdrop-blur-lg border-b border-transparent'>
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex item-center flex-shrink-0">
            <img className='h-10 w-10 mr-2' src="https://img.freepik.com/premium-vector/mountain-icon-vector-illustration-silhouette-peak-logo-showcasing-simplified-outline-mountain-designed-isolated-use-web-platforms-with-white-background_37925-5907.jpg?w=826" alt="logo" />
            <span className="text-xl tracking-tight">Rachan</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link to="contact" smooth={true} duration={1000}>
              <button className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-700 py-2 px-3 border rounded-md'>Contact Me</button>
            </Link>
            <Link to="properties" smooth={true} duration={1000}>
              <button className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-700 py-2 px-3 rounded-md'>Find me a home</button>
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='py-4'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to="contact" smooth={true} duration={1000}>
                <button className='py-2 px-3 border rounded-md'>Contact me</button>
              </Link>
              <Link to="properties" smooth={true} duration={1000}>
                <button className='py-2  px-3 border rounded-md bg-gradient-to-r  from-blue-600 via-purple-600 to-pink-700'>Find me a home</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
