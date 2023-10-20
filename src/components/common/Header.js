import React, { useState } from "react";
import logo from "../../asserts/logo.png";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header classNameName="w-full h-full overflow-hidden border  ">
      <nav className="text-white z-10 fixed top-0 left-0 right-0  bg-white shadow-sm flex   h-[4rem] 2xl:h-[6rem] 2xl:px-4">
        <div className="  z-10  w-1/2 md:w-1/4">
          <div className="py-4   bg-sky flex mx-6 bg-sky-100  shadow-md   md:w-auto h-full md:h-auto ">
            <img
              src={logo}
              className="self-center justify-self-center  object-contain   h-[6rem]  2xl:h-[9rem]"
              alt="Logo"
            />
          </div>
        </div>
        <div
          className={`md:w-2/4 md:grid md:static absolute z-10 top-[10%] bg-navy md:bg-transparent text-white  h-[30rem] right-0 w-[20rem] md:h-auto ${
            open ? "visible" : "hidden"
          }`}
        >
          <ul className="self-center  h-full  2xl:text-2xl text-white justify-evenly  flex flex-col md:text-navy md:flex-row gap-4 2xl:gap-[8%] items-center md:justify-center">
            <li className=" hover:text-sky  font-semibold ">
              <Link to="/">Home</Link>
            </li>
            <li className=" hover:text-sky   font-semibold  ">
              <Link>Products</Link>
            </li>
            <li className=" hover:text-sky  font-semibold  ">
              {" "}
              <Link>Aboutus</Link>
            </li>
            <li className=" hover:text-sky   font-semibold ">
              {" "}
              <Link>Contactus</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center  justify-end text-navy pr-4 w-1/2 md:w-1/4 ">
          <Link to="login">
            {" "}
            <button
              type="button"
              className=" hover:bg-navy 2xl:text-2xl hover:text-white font-medium rounded-0 text-sm md:px-4 md:py-2 text-center mr-3 md:mr-0 "
            >
              Login
            </button>
          </Link>
          <Link to="signup">
            <button
              type="button"
              className="hover:bg-navy 2xl:text-2xl hover:text-white font-medium rounded-0 text-sm md:px-4 md:py-2 text-center mr-3 md:mr-0"
            >
              Register
            </button>
          </Link>
          {open ? (
            <button
              className="md:hidden"
              onClick={() => {
                setOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          ) : (
            <button
              className="md:hidden"
              onClick={() => {
                setOpen(true);
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}
        </div>
      </nav>
      <Outlet />
    </header>
  );
}
