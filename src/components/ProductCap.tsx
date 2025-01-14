"use client";
import React from "react";
import { motion } from "framer-motion";
import image1 from "../../public/images/cap (1).jpg";
import image2 from "../../public/images/cap (2).jpg";
import image3 from "../../public/images/cap (3).jpg";
import Image from "next/image";
import Link from "next/link";

const ProductCap = () => {
  const allCaps = [
    {
      id: 2,
      name: "Porkpie Cap",
      no: "02",
      image: image1,
      price: "£7.99",
      quantity: 24,
      total: "£191.76",
    },
    {
      id: 4,
      name: "Fedora Cap",
      no: "04",
      image: image2,
      price: "£6.99",
      quantity: 50,
      total: "£349.50",
    },
    {
      id: 5,
      name: "Baseball Cap",
      no: "05",
      image: image3,
      price: "£5.99",
      quantity: 100,
      total: "£599.00",
    },
    {
      id: 6,
      name: "Porkpie Cap",
      no: "02",
      image: image1,
      price: "£5.49",
      quantity: 200,
      total: "£1098",
    },
  ];

  return (
    <section id="caps">
      <div className="text-center mb-14 mt-14 p-4">
        <h1 className="font-bold text-center text-4xl">Our Cap</h1>
        <p className="text-[18px] text-black">
          From enhancing your digital presence to creating impactful designs, we
          provide <br />
          solutions that drive business growth.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mr-2">
        {allCaps.map((cap) => (
          <motion.div
            key={cap.id}
            className="bg-[#e7dec7] rounded-md p-2 lg:w-80 m-4 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="p-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.4,
                  },
                },
              }}
            >
              <Image
                src={cap?.image}
                alt=""
                height={500}
                width={520}
                className="object-fit object-center quantity-w-[170px]"
              ></Image>

              <motion.h1
                className=" flex  rounded-md gap-2 pt-8  text-[20px] lg:text-[24px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className=" pl-2 rounded-md font-bold">Each Price :</span>
                {cap?.price}
              </motion.h1>

              <motion.h1
                className=" flex  rounded-md gap-2  text-[20px] lg:text-[24px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className=" pl-2 rounded-md font-bold">Quantity :</span>
                {cap?.quantity}
              </motion.h1>

              <motion.h1
                className=" flex  rounded-md gap-2  text-[20px] lg:text-[24px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className=" pl-2 rounded-md font-bold">
                  Total Price :
                </span>
                {cap?.total}
              </motion.h1>
              <div className="flex items-center gap-x-4 pt-4 ">
                <Link href="/#project">
                  <button className="w-36 h-14 bg-gradient-to-r from-[#e0584c] to-[#FD3B29] hover:bg-[#132836] border-none rounded-md text-[18px] text-white font-bold transition-all duration-300">
                    Order now
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductCap;
