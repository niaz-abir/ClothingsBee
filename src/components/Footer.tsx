/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import {
  FaCodeBranch,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import image1 from "../../public/images/WhatsApp_Image_2024-08-05_at_03.20.56_95cc1b03-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mt-24 pb-6  bg-[#f3eddd] shadow-md shadow-[#b1aa9c] border-t-2 "
    >
      <footer className="footer text-black p-10">
        <div>
          <h1 className="text-[25px] font-bold">"Discover New Horizons,</h1>
          <h1 className="text-[25px] font-bold">
            Empower Your Business to Thrive"
          </h1>
          <button className="p-4 mt-4 pl-2 bg-gradient-to-r from-[#e0584c] to-[#FD3B29] border-none rounded-md text-[18px] text-black font-bold transition-all duration-300  ">
            <Link href="contact-us" className="pt-2">
              Let's Connect
            </Link>
          </button>
        </div>

        <nav className="font-semibold text-[16px]">
          <h6 className="font-bold text-black text-[18px]">Services</h6>
          <a className="link link-hover text-black">Cap</a>
          <a className="link link-hover text-black">TShirt</a>
          <a className="link link-hover text-black">Delivery</a>
          <a className="link link-hover text-black">Discount</a>
        </nav>
        <nav className="font-semibold text-[16px] text-black">
          <h6 className="font-bold text-black text-[18px]">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-[16px]">Address</h6>
          <p className="text-[20px]"> E13 9BL, Fawn road,</p>
          <p className="text-[20px]"> Upton park, London, United Kingdoom.</p>
          <h6 className="font-semibold text-[16px] pt-2">Number:</h6>
          <p className="text-[20px]">+44 7459 449187 </p>
        </nav>
      </footer>
      <div className="flex justify-between p-2 mt-4">
        <div>
          <h4>Copyright©clothingsbee$2024 </h4>
        </div>
        <div className="flex gap-2">
          <Link href="https://www.facebook.com/clothingsbeeuk/">
            <FaFacebookSquare className="text-3xl " />
          </Link>
          <Link href="http://instagram.com/clothingsbeeuk/">
            <FaInstagram className="text-3xl" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
