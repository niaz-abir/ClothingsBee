"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiGraduationCapFill } from "react-icons/ri";
import image1 from "../../public/images/tshirt (4).jpg";
import image2 from "../../public/images/tshirt (5).jpg";
import image3 from "../../public/images/tshirt (6).jpg";
import Image from "next/image";
import Link from "next/link";

const Shirt = () => {
  const allTShirts = [
    {
      id: 2,
      name: "Clothings Bee softstyle t-shirt",
      no: "02",
      image: image1,
      price: "$8.99",
      quantity: 12,
      total: "$107.88",
    },
    {
      id: 4,
      name: "Clothings Bee softstyle t-shirt",
      no: "04",
      image: image2,
      price: "$6.99",
      quantity: 24,
      total: "$167.76",
    },
    {
      id: 5,
      name: "Clothings Bee softstyle t-shirt",
      no: "05",
      image: image3,
      price: "$5.49",
      quantity: 50,
      total: "$274.50",
    },
    {
      id: 2,
      name: "Clothings Bee softstyle t-shirt",
      no: "02",
      image: image1,
      price: "$5.49",
      quantity: 100,
      total: "$549.00",
    },
  ];

  return (
    <section id="tShirts">
      <div className="text-center mb-14 mt-14 p-4">
        <h1 className="font-bold text-center text-4xl">Our TShirt</h1>
        <p className="text-[18px] text-white">
          From enhancing your digital presence to creating impactful designs, we
          provide <br />
          solutions that drive business growth.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {allTShirts?.map((tShirt) => (
          <motion.div
            key={tShirt?.id}
            className="bg-[#353535] rounded-md p-4 lg:w-96 m-4 relative"
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
                src={tShirt?.image}
                alt=""
                height={500}
                width={520}
                className="object-fit object-center   min-w-[170px]"
              ></Image>

              <motion.h1
                className=" flex   font-bold rounded-md gap-2 pt-8  text-[20px] lg:text-[24px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className=" pl-2 rounded-md font-bold"></span>
                {tShirt?.name}
              </motion.h1>

              <motion.h1
                className=" flex  rounded-md gap-2 pt-2   text-[20px] lg:text-[24px] items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <span className=" pl-4  rounded-md font-bold">Quantity :</span>
                {tShirt?.quantity}
              </motion.h1>

              {/* <motion.h1
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
                {tShirt?.total}
              </motion.h1> */}

              <div className="flex items-center gap-x-4 pt-4 ">
                <Link href="order-now">
                  <button className="w-52 h-14 bg-gradient-to-r from-[#e0584c] to-[#FD3B29] hover:bg-[#132836] border-none rounded-md text-[18px] text-white font-bold transition-all duration-300">
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

export default Shirt;
