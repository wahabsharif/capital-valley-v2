// Intro.tsx
import Image from "next/image";
import React from "react";
import introImage from "@/assets/home/introduction.jpg";

const Intro: React.FC = () => {
  return (
    <section className="about-us bg-black section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="mb-5">
              <h6 className="font-medium uppercase tracking-[10px] text-gray-600 mb-10">
                About Us
              </h6>
              <h3 className="uppercase tracking-[1px] mb-30 gradient-text">
                Capital Valley Islamabad
              </h3>
              <p>
                A Real Estate Project packed with all kinds of facilities means
                nothing if it is not readily accessible from the main points of
                the city. Considering this important aspect of the location,
                Capital Valley Islamabad is an unparalleled housing society in
                twin cities.
                <br /> It is zero kilometres away from New International Airport
                Islamabad and just a few minutes drive away from the main
                Kashmir Highway and Zero Point Islamabad. Capital Valley
                Islamabad is located at a highly accessible point where the
                major landmarks are only a few kilometres away.
              </p>
            </div>
          </div>
          <div className="col-lg-7 img">
            <Image src={introImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
