"use client"; // Add this line to mark the component as a Client Component


import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';





export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // To handle hydration issues

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isMounted) return null; // Prevent rendering until the component is mounted

  return (
    <header className="lg:flex bg-white p-4 lg:p-0 shadow-md md:block">
    {/* Logo */}
    <div className="flex justify-center lg:justify-start items-center w-full lg:w-auto">
      <Image
        src="/logo.png"
        alt=""
        width={150}
        height={150}
        className="mx-auto lg:ml-44"
      />
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="text-black dark:text-white focus:outline-none lg:hidden ml-auto"
      >
        {/* Icon for Toggle Button */}
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>
    </div>
  
    {/* Navigation Menu */}
    {isMenuOpen && (
      <div className="lg:hidden mt-2 transition-all duration-300 ease-in-out">
        <ul className="space-y-2 text-center text-xl ">
          <li>
            <Link href="/" className="block text-black dark:text-white py-2">Home</Link>
          </li>
          <li>
            <Link href="#product" className="block text-black dark:text-white py-2">Product</Link>
          </li>
          <li>
            <Link href="#About" className="block text-black dark:text-white py-2">About</Link>
          </li>
          <li>
            <Link href="#Contact" className="block text-black dark:text-white py-2">Contact</Link>
          </li>
        </ul>
      </div>
    )}
  
    {/* Display the navigation menu inline for large screens */}
    <nav className={`hidden lg:flex lg:items-center ml-28 text-xl lg:space-x-6 ${isMenuOpen ? '' : 'hidden'}`}>
      <Link href="/" className="block text-black dark:text-white px-2 py-1">Home</Link>
      <Link href="#product" className="block text-black dark:text-white px-2 py-1">Product</Link>
      <Link href="#About" className="block text-black dark:text-white px-2 py-1">About</Link>
      <Link href="#Contact" className="block text-black dark:text-white px-2 py-1">Contact</Link>
    </nav>
  </header>
  
         

      )}




  
   
  
 











   
  

