"use client";

import paymentPlansData from "@/data/paymentPlansData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PaymentPlan: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const imagesPerView = 3;
  const autoSlideInterval = 3000;

  // Calculate the total number of sets based on imagesPerView
  const totalSlides = Math.ceil(paymentPlansData.length / imagesPerView);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesPerView >= paymentPlansData.length
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
    <section className="relative w-full min-h-screen max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h6 className="font-medium uppercase tracking-[10px] text-gray-500">
          Our
        </h6>
        <h3 className="uppercase tracking-[1px] mb-4 gradient-text">
          Payment Plan
        </h3>
      </div>
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentIndex / totalSlides) * 100}%)`,
        }}
      >
        {paymentPlansData.map((plan) => (
          <div
            key={plan.id}
            className="flex-none w-full sm:w-1/2 md:w-1/3 px-2"
          >
            <Image
              src={plan.image}
              alt={plan.title}
              className="w-full object-cover rounded-xl cursor-pointer"
              height={3508}
              width={2480}
              onClick={() => openModal(plan.image)}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{plan.title}</h3>
              <p className="text-gray-700">{plan.description}</p>
            </div>
          </div>
        ))}
      </div>

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

export default PaymentPlan;
