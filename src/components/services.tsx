"use client";
import React from "react";
import { motion } from "framer-motion";

import { RiPaintBrushLine, RiTShirt2Line, RiWebhookLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { PiBaseballCapLight } from "react-icons/pi";

const Services = () => {
  const allServices = [
    {
      id: 1,
      name: "Custom Cap Design",
      no: "01",
      icon: <PiBaseballCapLight />,
      details:
        "Create personalized caps that showcase your unique style. From trendy designs to brand logos, we bring your vision to life.",
    },
    {
      id: 2,
      name: "T-Shirt Printing",
      no: "02",
      icon: <RiTShirt2Line />,
      details:
        "Get high-quality t-shirts printed with your custom designs. Perfect for personal use, events, or promoting your brand.",
    },
    {
      id: 3,
      name: "Bulk Apparel Orders",
      no: "03",
      icon: <FiShoppingBag />,
      details:
        "Order caps and t-shirts in bulk with competitive pricing. Ideal for businesses, teams, or special events.",
    },
  ];

  return (
    <section id="services">
      <div className="text-center mb-14 mt-20 p-4">
        <h1 className="font-bold text-center text-4xl">
          Discover Our Services
        </h1>
        <p className="text-[18px] text-white">
          From crafting unique apparel to delivering exceptional customer
          experiences, <br /> we provide solutions that drive your clothing
          business forward.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {allServices.map((service) => (
          <div key={service?.id} className="parent">
            <div className="cardService ">
              <div className="logo">
                {/* <span className="circle circle1"></span>
                <span className="circle circle2"></span> */}
                {/* <span className="circle circle3"></span> */}

                <span className="circle circle5 text-4xl">{service?.icon}</span>
              </div>

              <div className="glass"></div>
              <div className="content">
                <span className="title">{service?.name}</span>
                <span className="text-[16px] ">{service?.details}</span>
              </div>
              <div className="bottom">
                <div className="social-buttons-container"></div>
                <div className="view-more"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
