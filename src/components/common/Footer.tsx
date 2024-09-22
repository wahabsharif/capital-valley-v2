import { footerData } from "@/data/footerData";
import { socialData } from "@/data/socialData";
import Image from "next/image";
import React from "react";
import footerLogo from "@/assets/logo/capital-valley-logo-white.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <Image
            src={footerLogo}
            width={500}
            height={500}
            alt="capital valley"
            className="h-24"
          />
          <p>Zero kilometers from New Islamabad International Airport.</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            {footerData.resources.title}
          </h3>
          <ul className="space-y-2">
            {footerData.resources.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            {footerData.usefulLinks.title}
          </h3>
          <ul className="space-y-2">
            {footerData.usefulLinks.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            {footerData.contact.title}
          </h3>
          <h6 className="text-gray-600">Email Address</h6>
          <p className="mb-4">
            <Link
              href="mailto:info@capitalvalley.com"
              className="font-bold text-gray-400 hover:text-thBlue"
            >
              info@capitalvalley.com
            </Link>
          </p>
          {/* Social Icons */}
          <ul className="flex justify-start space-x-4">
            {socialData.map((social) => (
              <li
                key={social.id}
                className="p-2 bg-thBlue border-2 rounded-full hover:bg-gray-200"
              >
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-thBlue"
                >
                  <social.icon size={15} className="text-sm" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-2 flex justify-center items-center text-gray-400">
        <div
          className="text-center mr-2"
          dangerouslySetInnerHTML={{ __html: footerData.copyright.text }}
        />
        <div className="text-center ml-2">
          {footerData.copyright.designCredit.text}{" "}
          <a
            href={footerData.copyright.designCredit.link}
            target="_blank"
            className="text-thBlue hover:text-white"
          >
            {footerData.copyright.designCredit.name}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
