"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import image1 from "../../public/images/Website Banner-07 (2).png";
import image2 from "../../public/images/Website Banner-06 (2).png";
import image3 from "../../public/images/Website Banner-08 (2).png";

export function Banner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="flex items-center justify-center h-[50vh]">
        <p className="text-xl font-semibold text-[#c00838]">Loading...</p>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-[95vh] mb-12">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {[image1, image2, image3].map((img, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image */}
            <Image
              src={img}
              alt={`Hero ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />

            {/* Optional Overlay */}
            {/* <div className="absolute inset-0 bg-black/50"></div> */}

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-16 text-white">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
                Premium Custom Apparel <br />
                for Your Brand & Business
              </h1>

              <p className="max-w-xl mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
                <span className="font-bold text-orange-400">Clothings Bee</span>{" "}
                is a US-based custom clothing business with 7 years of
                experience. We specialize in bulk orders of high-quality custom
                T-shirts, hoodies, caps, and beanies tailored to your brand’s
                needs.
              </p>

              <Link
                href="/order-now"
                className="mt-6 px-6 py-3 bg-gradient-to-r from-[#e0584c] to-[#FD3B29] rounded-md text-sm sm:text-base font-bold transition-all duration-300 hover:scale-105"
              >
                Get Quote
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
