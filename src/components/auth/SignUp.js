import React from "react";
import bgimg from "../../asserts/pexels-nataliya-vaitkevich-6214471.jpg";
import { Link } from "react-router-dom";
import apiService from "../../utils/apiService";

export default function SignUp() {
  return (
    <div className="none relative lg:static lg:flex  overflow-hidden h-screen">
      <div className="w-full h-full  lg:h-auto lg:w-2/3 ">
        <img
          src={bgimg}
          className=" object-cover w-full h-full"
          alt="shop me"
        />
      </div>
      <div className=" bg-lightgrey  md:overflow-hidden overflow-y-scroll absolute lg:static top-[5%] md:top-[10%]  left-[10%] md:left-[25%] w-[80%] md:w-[50%] lg:w-1/3 flex justify-center items-center ">
        <div className=" w-[70%]  ">
          <p className="my-2 md:my-4 text-[1rem] md:text-[2rem] font-semibold text-navy">
            Creat your Account
          </p>
          <form className="flex flex-col gap-2 md:gap-4  text-start">
            <input
              type="text"
              placeholder="First Name"
              className=" border-b-2 focus:outline-none placeholder:text-[.7rem] md:placeholder:text-[1rem] border-cgreen bg-transparent placeholder:text-slate-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className=" border-b-2 focus:outline-none  border-cgreen  placeholder:text-[.7rem] md:placeholder:text-[1rem]  bg-transparent placeholder:text-slate-500"
            />
            <input
              type="text"
              placeholder="User Name"
              className=" border-b-2 focus:outline-none  border-cgreen placeholder:text-[.7rem] md:placeholder:text-[1rem] bg-transparent placeholder:text-slate-500"
            />
            <input
              type="text"
              placeholder="Email Name"
              className=" border-b-2 focus:outline-none  border-cgreen placeholder:text-[.7rem] md:placeholder:text-[1rem] bg-transparent placeholder:text-slate-500"
            />
            <input
              type="password"
              placeholder="Password"
              className=" border-b-2 focus:outline-none  border-cgreen placeholder:text-[.7rem] md:placeholder:text-[1rem] bg-transparent placeholder:text-slate-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className=" border-b-2 focus:outline-none  border-cgreen placeholder:text-[.7rem] md:placeholder:text-[1rem] bg-transparent placeholder:text-slate-500"
            />
            <input
              type="text"
              placeholder="Phone number"
              className=" border-b-2 focus:outline-none  border-cgreen placeholder:text-[.7rem] md:placeholder:text-[1rem] bg-transparent placeholder:text-slate-500"
            />
            <input
              type="text"
              placeholder="Address"
              className=" border-b-2 focus:outline-none  border-cgreen placeholder:text-[.7rem] md:placeholder:text-[1rem] bg-transparent placeholder:text-slate-500"
            />

            <label for="img ">Choose a cool picture for your profile</label>
            <input type="file" id="img" />
            <div className="flex gap-2">
              <input type="checkbox" id="terms" />
              <label for="terms">Terms and Conditions</label>
            </div>
            <div className="grid text-white hover:font-semibold hover:text-navy">
              <button className="bg-navy  hover:bg-white self-center w-[35%] justify-self-center p-2 ">
                Signup
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center gap-2 my-4">
            <p>Don't have an account yet?</p>
            <Link to="/login">
              <button className="font-semibold underline underline-offset-4 text-navy hover:text-cgreen">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
