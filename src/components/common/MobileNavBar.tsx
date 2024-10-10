"use client";

import { navData } from "@/data/navData";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import cvLogo from "@/assets/logo/capital-valley-logo-white.svg";
import FileVerification from "../fileVerification/FileVerificationButton";

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
];

const MobileNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="playfair-font fixed top-0 left-0 w-full bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-30 backdrop-blur-lg shadow-md z-50 md:hidden">
      <div className="flex justify-between items-center p-2 container mx-auto">
        {/* Left side: Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={cvLogo}
              alt="Logo"
              width={40}
              height={40}
              className="w-10"
            />
          </Link>
        </div>

        <div className="flex space-x-3 items-center flex-shrink-0">
          <FileVerification />
          <button
            className="text-dark dark:text-light text-2xl flex-shrink-0"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 w-full bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 backdrop-blur-lg text-dark dark:text-light transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col h-screen`}
      >
        {/* Close button in top-right corner */}
        <div className="absolute top-6 right-4">
          <button
            className="text-dark dark:text-light text-2xl"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>
        </div>

        <div className="container mx-auto p-4 z-50 flex-grow overflow-y-auto mt-10">
          <ul className="space-y-4">
            {navData.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex justify-between items-center w-full py-2 px-4 text-left hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white flex justify-center items-center text-black px-4 py-2 rounded-lg w-3/4 mx-auto m-4 font-semibold">
          <Link href={"tel:03111177716"}>UAN: 0311 1177716</Link>
        </div>

        <div className="flex justify-center p-4 space-x-4 border-t border-gray-200">
          {socialLinks.map(({ href, icon }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-thBlue  text-2xl hover:text-gray-700"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
