import Image from "next/image";
import React from "react";
import { socialData } from "@/data/socialData";
import bannerImage from "@/assets/home/home-banner.png";
import WordFadeIn from "@/components/magicui/word-fade-in";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={bannerImage}
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 md:p-8 text-center">
        <div className="w-full max-w-lg md:max-w-2xl">
          <WordFadeIn
            className="text-4xl md:text-6xl font-extrabold gradient-text"
            words="Capital of the Capital."
          />
          <BlurFade className="text-gray-300 text-xl md:text-2xl mt-4">
            <p>0 KM from New Islamabad International Airport.</p>
          </BlurFade>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 flex space-x-3 md:space-x-4 z-10">
        {socialData.map(({ id, icon: Icon, link }) => (
          <Link
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 p-2 md:p-4 bg-gray-700 hover:bg-gray-300 border-gray-300 rounded-full text-gray-300 text-sm md:text-sm lg:text-md hover:text-gray-700 transition-colors duration-300"
          >
            <Icon />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Banner;
