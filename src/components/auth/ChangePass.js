import React, { useState } from "react";
import apiService from "../../utils/apiService";
import { Link } from "react-router-dom";

export default function ChangePass(props) {
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const { email } = props;
  console.log(props);

  const handleSubmit = async () => {
    console.log(email, password);
    if (!password) {
      setMessage("Please enter your new password");
    } else if (!conPassword) {
      setMessage("Please confirm your password");
    } else if (password !== conPassword) {
      setMessage("OPPS! Password dosen't match");
    } else {
      setMessage("");
      console.log(email, password);
    }
  };
  const [message, setMessage] = useState("");
  return (
    <div className="bg-sky  flex justify-center items-center h-screen overflow-hidden">
      <div className="bg-cgreen h-auto md:h-[70%] rounded-md shadow-md flex items-center justify-center flex-col w-[30rem]">
        <div className="w-[80%] grid gap-4">
          <p className="my-2 text-lg text-white">
            Yes! Now freely create your new password
          </p>
          <input
            type="passsword"
            placeholder="enter new Password"
            className="p-2 rounded-md focus:ring-2 placeholder:text-slate-500"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="conPassword"
            placeholder="confirm your password"
            onChange={(e) => {
              setConPassword(e.target.value);
            }}
            className="p-2 rounded-md focus:ring-2 placeholder:text-slate-500"
          />
          <div className=" mt-4 self-center">
            <button
              onClick={handleSubmit}
              className="bg-navy py-2  hover:text-cgreen hover:bg-white text-white px-20 my-4"
            >
              Send
            </button>
          </div>
        </div>

        {message ? (
          <div className="text-red-900  my-4 text-lg">{message}</div>
        ) : (
          ""
        )}
        <div className="  self-center">
          <Link to="/login">
            {" "}
            <p className=" py-2  underline underline-offset-4 font-semibold  hover:text-navy text-white ">
              Go to Login ?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
