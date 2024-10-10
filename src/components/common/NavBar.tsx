import cvLogo from "@/assets/logo/cv-logo-white.svg";
import { navData } from "@/data/navData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FileVerificationButton from "@/components/fileVerification/FileVerificationButton";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-black bg-opacity-10 backdrop-blur-md shadow-lg hidden md:block fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Left Side - Logo */}
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

        {/* Center - Menu Items (hidden on small devices) */}
        <div className="flex space-x-8">
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

        {/* Right Side - UAN Number and FileVerificationButton component */}
        <div className="flex items-center space-x-4">
          <div className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
            <Link href={"tel:03111177716"}>UAN: 0311 1177716</Link>
          </div>
          <FileVerificationButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
