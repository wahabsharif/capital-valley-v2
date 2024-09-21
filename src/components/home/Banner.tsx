import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/home/home-banner.png";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BlurIn from "@/components/magicui/blur-in";

const Banner = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Image
        src={bannerImage}
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8 text-center">
        <div>
          <GradualSpacing
            className="text-6xl font-bold gradient-text"
            text="Capital of the Capital."
          />
          <BlurIn
            className="text-gray-300 text-2xl"
            word="0 KM from New Islamabad International Airport."
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
