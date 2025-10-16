"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Review = () => {
  return (
    <section className="max-w-6xl mt-8 mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-black">
          Customer <span className="text-[#FD3B29]">Review </span> Videos
        </h2>
        <p className="text-lg font-medium text-black mt-2">
          Watch what our happy customers are saying about our clothing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Video 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-xl overflow-hidden shadow-md bg-[#e7dec7] border border-neutral-800/50"
        >
          <video
            src="/images/videoreview4.mp4"
            controls
            className="w-full h-96 object-cover"
          ></video>
        </motion.div>

        {/* Video 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-xl overflow-hidden shadow-md bg-[#e7dec7] border border-neutral-800/50"
        >
          <video
            src="/images/videoreview2.mp4"
            controls
            className="w-full h-96 object-cover"
          ></video>
        </motion.div>

        {/* Video 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-xl overflow-hidden shadow-md bg-[#e7dec7] border border-neutral-800/50"
        >
          <video
            src="/images/videoreview5.mp4"
            controls
            className="w-full h-96 object-cover"
          ></video>
        </motion.div>

        {/* Video 4 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-xl overflow-hidden shadow-md bg-[#e7dec7] border border-neutral-800/50"
        >
          <video
            src="/images/videoreview6.mp4"
            controls
            className="w-full h-96 object-cover"
          ></video>
        </motion.div>
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-10">
        <Link
          href="/review"
          className="bg-[#FD3B29] text-white font-semibold px-8 py-3 rounded-sm shadow-md hover:bg-[#e33222] transition"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default Review;
