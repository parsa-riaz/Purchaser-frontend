import React from "react";
import Hero1 from "../../asserts/Hero1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <div className="h-full w-full   overflow-hidden">
      <div className=" flex  flex-col md:flex-row  h-auto md:h-[45rem] 2xl:h-[60rem]">
        <div className=" w-full md:w-1/2 mt-4 flex  justify-center items-center">
          <div className=" w-[80%] md:w-[60%] 2xl:w-[70%] 2xl:mt-8  md:text-start">
            <h1 className=" my-4 2xl:text-6xl text-2xl md:text-4xl font-merri uppercase text-navy font-bold">
              Browse our premium producst
            </h1>
            <p className="my-3 2xl:text-[1.5rem] 2xl:my-8 font-playpan ">
              Introducing our finest selection of premium products, meticulously
              crafted to enhance your lifestyle and cater to your most exquisite
              tastes. At Purchasers, we take pride in offering you only the
              best.{" "}
            </p>

            <button className="border hover:text-white hover:bg-navy font-neon text-lg border-navy px-8 py-[18%] 2xl:py-[14%]  rounded-full my-2">
              Browse More <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </div>
        </div>
        <div className=" w-full  md:w-1/2 h-full ">
          <img
            src={Hero1}
            className="w-full h-auto object-cover "
            alt="Hijabi women doing shoping"
          />
        </div>
      </div>
      <div className="static md:relative  z-0   md:-top-28 md:flex flex-col  md:flex-row h-auto 2xl:h-[50rem] md:h-[40rem]">
        <div className=" bg-cgreen  w-full md:w-2/3  flex  justify-center items-center">
          <div className="md:w-[50%] w-[80%] text-center md:text-start">
            <h1 className="my-4 2xl:text-6xl text-3xl md:text-4xl font-merri uppercase text-white font-bold">
              Our best sellers
            </h1>
            <p className="my-10 2xl:text-[1.5rem] font-playpan text-white">
              Our best seller products are a testament to excellence and
              customer satisfaction. These top-performing items have
              consistently garnered praise for their exceptional quality and
              unmatched value, making them the preferred choice of savvy
              shoppers.
            </p>

            <button className="border  hover:text-navy text-white hover:bg-white font-neon text-lg 2xl:text-2xl border-white px-8 py-[16%] 2xl:py-[15%] rounded-full my-2">
              Browse More <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:absolute top-8 right-10  justify-center items-center gap-20 flex border border-purple-900">
          {" "}
          <div className="border  border-black-900 h-[70%] w-[50%]">div 2</div>
          <div className="border border-gray-700 h-[70%] w-[50%]">div</div>
        </div>
      </div>
    </div>
  );
}
