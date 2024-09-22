"use client";

import { useState, useEffect } from "react";
import { notificationsData } from "@/data/notificationsData";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Notifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const imagesPerView = 3;
  const autoSlideInterval = 2000;

  // Calculate the total number of sets based on imagesPerView
  const totalSlides = Math.ceil(notificationsData.length / imagesPerView);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? (totalSlides - 1) * imagesPerView
        : prevIndex - imagesPerView
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesPerView >= notificationsData.length
        ? 0
        : prevIndex + imagesPerView
    );
  };

  const openModal = (image: string) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  // Auto-slide logic with loop
  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, autoSlideInterval);

    // Clear the interval on component unmount
    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  return (
    <section className="relative w-full max-w-6xl mx-auto py-8">
      {/* Section heading */}
      <div className="text-center mb-6">
        <h6 className="font-medium uppercase tracking-[10px] text-gray-500 ">
          Latest
        </h6>
        <h3 className="uppercase tracking-[1px] mb-30 gradient-text">
          Notifications
        </h3>
      </div>

      {/* Image carousel */}
      <div className="overflow-hidden rounded-lg shadow-md">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(-${
              (currentIndex / notificationsData.length) * 100
            }%)`,
          }}
        >
          {notificationsData.map((notification) => (
            <div
              key={notification.id}
              className="flex-none w-full sm:w-1/2 md:w-1/3 px-2"
            >
              <Image
                src={notification.image}
                alt={notification.alt}
                className="w-full h-auto object-cover rounded-lg cursor-pointer"
                width={500}
                height={500}
                onClick={() => openModal(notification.image)} // Open modal on click
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous and Next buttons */}
      {/* <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
      >
        <IoIosArrowForward />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === Math.floor(currentIndex / imagesPerView)
                ? "bg-blue-500"
                : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div> */}

      {/* Modal for displaying the clicked image */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center p-10 z-50">
          <div className="relative max-w-4xl max-h-[90%] rounded-xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-200 text-center p-2 text-3xl bg-gray-800 rounded-lg"
            >
              &times;
            </button>
            <Image
              src={modalImage}
              alt="Modal Image"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              width={1080}
              height={1920}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Notifications;
