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
            Discover how our service can benefit you have grow.
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
                Efficient customer support
              </p>
              <p className="font-medium text-black">
                Exceptional service and support! The team quickly resolved our
                IT issues and provided invaluable advice. Highly recommend!
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
                Marketing Manager at Vivid Horizons
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
                Excellent product features
              </p>
              <p className="font-medium text-black">
                Professional, reliable, and knowledgeable. They transformed our
                IT infrastructure seamlessly and improved our overall
                efficiency.
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
                CEO at Apex Dynamics
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
                Seamless integration process
              </p>
              <p className="font-medium text-black">
                Fantastic experience! Their expertise in web development and
                digital marketing significantly boosted our online presence.
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
                CTO at NexEra Ventures
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
                Reliable service uptime
              </p>
              <p className="font-medium text-black">
                Outstanding service! They delivered high-quality web development
                and provided excellent ongoing support. Worth every penny!
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
                COO at clipse Enterprises
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
