/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section>
      <section className="max-w-5xl mx-auto w-full px-10 py-10">
        <div className="flex items-center justify-center flex-col mb-8 gap-y-2 py-5">
          <h2 className="text-2xl lg:text-4xl font-bold  text-center text-black">
            Heres what our
            <span className="text-[#FD3B29] "> customers</span> have to say
          </h2>
          <p className="text-[18px] font-medium text-black">
            Discover how our clothing brings comfort, style, and confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border p-7 rounded-xl bg-[#e7dec7] drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between"
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-black">
                Stylish and comfortable
              </p>
              <p className="font-medium text-black">
                Absolutely love the quality of their clothes! The fabric feels
                soft, fits perfectly, and looks amazing. Truly exceeded my
                expectations!
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/43.jpg"
                alt="Emily Smith"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-black">
                Emily Smith
              </p>
              <p className="text-sm font-medium text-black">
                Fashion Blogger at TrendVibe
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border p-7 rounded-xl bg-[#e7dec7] drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between"
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-black">
                Premium fabric quality
              </p>
              <p className="font-medium text-black">
                The collection is both trendy and durable. Every shirt and pant
                I’ve purchased has retained its color and shape even after many
                washes.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/34.jpg"
                alt="Michael Johnson"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-black">
                Michael Johnson
              </p>
              <p className="text-sm font-medium text-black">
                CEO at Urban Threads
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border p-7 rounded-xl bg-[#e7dec7] drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between"
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-black">
                Perfect fit and finish
              </p>
              <p className="font-medium text-black">
                Fantastic shopping experience! Their t-shirts and jerseys fit
                just right, and the stitching quality is top-notch. Highly
                satisfied!
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/71.jpg"
                alt="Sarah Brown"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-black">
                Sarah Brown
              </p>
              <p className="text-sm font-medium text-black">
                Stylist at ModeLine Studio
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border p-7 rounded-xl bg-[#e7dec7] drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between"
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-black">
                Great value for money
              </p>
              <p className="font-medium text-black">
                Their clothes look premium but come at such reasonable prices.
                Excellent service, fast delivery, and super comfortable outfits!
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/71.jpg"
                alt="James White"
                className="h-10 w-10"
              />
              <p className="pt-2 text-sm font-semibold text-black">
                James White
              </p>
              <p className="text-sm font-medium text-black">
                Content Creator at DailyFit Wear
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
