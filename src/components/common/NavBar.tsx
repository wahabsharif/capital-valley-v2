import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { navData } from "@/data/navData";
import cvLogo from "@/assets/logo/cv-logo-white.svg";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-black bg-opacity-10 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={cvLogo}
              alt="Logo"
              width={40}
              height={40}
              className="w-36"
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          {navData.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-200 font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-white font-semibold">UAN: 1234567890</div>
          <button className="text-white hover:text-gray-200">
            <FiSearch className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
