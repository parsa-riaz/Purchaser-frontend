import React from "react";
import bgimg from "../../asserts/pexels-anete-lusina-6331236.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiService from "../../utils/apiService";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await apiService
      .post("/users/login", formData)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <div className="flex justify-center items-center   h-screen overflow-hidden">
      <div className=" shadow-md  flex h-full w-full  ">
        <div className=" w-full lg:w-2/3 ">
          <img
            src={bgimg}
            alt="lady online shopping"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full lg:w-1/3 flex bg-lightgrey justify-center items-center">
          <div className=" w-[60%]">
            <p className="my-4 text-[2rem] font-semibold text-navy">
              Login to your Account
            </p>
            <form className="flex  flex-col gap-4">
              <input
                type="text"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="m-2 border-b-2 focus:outline-none  border-cgreen bg-transparent placeholder:text-slate-500"
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="m-2  bg-transparent focus:outline-none border-b-2 border-cgreen placeholder:text-slate-500"
              />
              <p
                for="terms"
                className="m-2 underline underline-offset-4 hover:text-cgreen text-navy  font-semibold"
              >
                <Link to="/forgetPassword">Forget Password ?</Link>
              </p>
              <div className="grid text-white hover:font-semibold hover:text-navy">
                <button
                  onClick={handleSubmit}
                  className="bg-navy  hover:bg-white self-center w-[35%] justify-self-center p-2 "
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center gap-2 my-4">
              <p>Don't have an account yet?</p>
              <Link to="/signup">
                <button className="font-semibold underline underline-offset-4 text-navy hover:text-cgreen">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
