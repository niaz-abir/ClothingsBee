/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import image1 from "../../../public/images/neworder (1).jpg";
import image2 from "../../../public/images/neworder (2).jpg";

interface TInput {
  user_email: string;
  productType: string;
  color: string;
  quantity: number;
  additionalNote: string;
  phone: string;
  address: string;
  user_image: FileList;
}

const Order = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInput>();

  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      "https://api.imgbb.com/1/upload?key=1f471dd54105935416929b8c41eb9f57",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data?.data?.url;
  };

  const onSubmit: SubmitHandler<TInput> = async (data) => {
    setIsLoading(true);

    try {
      let uploadedImageUrl = null;

      if (data?.user_image && data?.user_image[0]) {
        uploadedImageUrl = await uploadImage(data?.user_image[0]);
      }

      const submissionData = {
        ...data,
        imageUrl: uploadedImageUrl,
      };

      if (form.current) {
        await emailjs.send(
          "servicegraphitech",
          "template_ulg1uq6",
          submissionData,
          "B9eRXvIMGw4yENXED"
        );
        reset();
        alert("Order requirements submitted!");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col-reverse lg:flex-row gap-4 mt-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 p-4">
        <Image src={image1} height={450} width={450} alt="price" />
        {/* <Image src={image2} height={450} width={450} alt="price" /> */}
      </div>
      <div>
        <div className="text-white relative px-2 p-8 rounded-md w-[400px] lg:w-[800px] shadow-lg sm:rounded-3xl">
          <div className="text-center pb-4 -mt-4">
            <h1 className="text-4xl font-bold pt-4 pb-3">Order Process</h1>
            <p className="text-white pb-2">
              Please check the prices below before submitting your request.
              After you fill out the form, we’ll review your details and provide
              a mockup and final quote based on your requirements. Upload your
              logo or artwork and share any design preferences in the "Order
              Requirements" section. We’ll get back to you soon!
            </p>
          </div>
          <div className="flex justify-center">
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="w-full"
            >
              {/* Product Type & Color */}
              <div className="flex flex-col lg:flex-row gap-3 pb-4">
                <div className="w-full">
                  <label className="label font-bold text-sm pb-1">
                    Product Type:
                  </label>
                  <select
                    className="select select-bordered bg-[#f3eddd] w-full"
                    {...register("productType", {
                      required: "Product type is required",
                    })}
                  >
                    <option value="">Select product type</option>
                    <option value="Cap">Cap</option>
                    <option value="T-Shirt">T-Shirt</option>
                    <option value="hoodie">Hoodie</option>
                  </select>
                  {errors.productType && (
                    <p className="text-red-500 text-sm">
                      {errors.productType.message}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label className="label font-bold text-sm pb-1">Color:</label>
                  <input
                    type="text"
                    placeholder="Color"
                    className="input input-bordered bg-[#f3eddd] w-full"
                    {...register("color", { required: "Color is required" })}
                  />
                  {errors.color && (
                    <p className="text-red-500 text-sm">
                      {errors.color.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Quantity & Image */}
              <div className="flex flex-col lg:flex-row gap-3 pb-4">
                <div className="w-full">
                  <label className="label font-bold text-sm pb-1">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    placeholder="Quantity"
                    className="input input-bordered bg-[#f3eddd] w-full"
                    {...register("quantity", {
                      required: "Quantity is required",
                      valueAsNumber: true,
                    })}
                  />
                  {errors.quantity && (
                    <p className="text-red-500 text-sm">
                      {errors.quantity.message}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label className="label font-bold text-sm pb-1">
                    Upload Product Image:
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered bg-[#f3eddd] w-full"
                    {...register("user_image", {
                      required: "Image is required",
                    })}
                  />
                  {errors.user_image && (
                    <p className="text-red-500 text-sm">
                      {errors.user_image.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="flex flex-col lg:flex-row gap-3 pb-4">
                <div className="w-full">
                  <label className="label font-bold text-sm pb-1">Email:</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered bg-[#f3eddd] w-full"
                    {...register("user_email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.user_email && (
                    <p className="text-red-500 text-sm">
                      {errors.user_email.message}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <label className="label font-bold text-sm pb-1">Phone:</label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="input input-bordered bg-[#f3eddd] w-full"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Address & Additional Note */}
              <div className="pb-4">
                <label className="label font-bold text-sm pb-1">Address:</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered bg-[#f3eddd] w-full"
                  {...register("address", {
                    required: "Address is required",
                  })}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div className="pb-4">
                <label className="label font-bold text-sm pb-1">
                  Order Requirements:
                </label>
                <textarea
                  placeholder="Requirements "
                  className="textarea textarea-bordered bg-[#f3eddd] w-full"
                  {...register("additionalNote", {
                    required: "Requirements is required",
                  })}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`btn w-full ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#e0584c] to-[#FD3B29] text-white"
                }`}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
