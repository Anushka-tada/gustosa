"use client"
import React, { useState } from 'react';
import "../globals.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {

    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='navbar-outer d-flex py-3 justify-content-between align-items-center'>
        <div className='logo'>
          <img src='/assets/logo.png'  alt='logo' className='logo-img' />
        </div>

        {/* Hamburger icon for small screens */}
        <div className='hamburger d-md-none' onClick={toggleMenu}>
          <img src='https://cdn-icons-png.flaticon.com/128/1828/1828859.png' alt='menu' />
        </div>

        {/* Nav Links */}
        <ul className={`nav-links list-unstyled mb-0 ${menuOpen ? 'open' : ''}`}>

          <li>Home</li>
          <li>Shop</li>
          <li>Bulk Order</li>
          <li>Blog</li>
          <li>About</li>
        </ul>

        <div className='nav-icons d-flex gap-3 align-items-center'>
          <img src='https://cdn-icons-png.flaticon.com/128/6051/6051092.png' alt='icon1' />
          <img src='https://cdn-icons-png.flaticon.com/128/15494/15494722.png' alt='icon2' />
          <img src='https://cdn-icons-png.flaticon.com/128/18695/18695999.png' alt='icon3' />
        </div>
      </div>
    </>
  );
};

export default Navbar;
