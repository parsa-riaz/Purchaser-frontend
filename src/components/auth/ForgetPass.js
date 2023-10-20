import React, { useState } from "react";
import apiService from "../../utils/apiService";
import { useNavigate } from "react-router-dom";
import ChangePass from "./ChangePass";

export default function ForgetPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isOtp, setIsOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const sendEmail = async () => {
    if (!email) {
      setMessage("Enter a valid Email address");
    } else {
      await apiService
        .post("/users/forgetpassword", { email })
        .then((res) => {
          console.log(res.data);
          setIsOtp(true);
          setMessage("");
        })
        .catch((err) => {
          console.log(err.response.data);
          setMessage(err.response.data.message);
        });
    }
  };

  const handleVerify = async () => {
    if (!otp) {
      setMessage("Enter 6 digit Opt");
    } else {
      await apiService
        .post("/users/verifyotp", { email, otp })
        .then((res) => {
          console.log(res.data);
          <ChangePass email={email} />;
          navigate("/changePassword");
        })
        .catch((err) => {
          console.log(err.response.data);
          setMessage(err.response.data.message);
        });
    }
  };

  return (
    <div className="bg-sky  flex justify-center items-center h-screen overflow-hidden">
      <div className="bg-cgreen h-[60%] rounded-md shadow-md flex items-center justify-center flex-col w-[30rem]">
        <div className={` w-[80%] grid gap-4 ${isOtp ? "hidden" : "visible"}`}>
          <p className="my-2 text-lg text-white">Enter you registered email</p>
          <p className="my-2 text-lg text-white">
            We are going to send an otp to your account please verify that otp
          </p>
          <input
            type="email"
            placeholder="enter your email"
            className="p-2 rounded-md focus:ring-2 "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className=" my-4 self-center">
            <button
              onClick={sendEmail}
              className="bg-navy py-2  hover:text-cgreen hover:bg-white text-white px-10 my-4"
            >
              Send
            </button>
          </div>
        </div>

        <div
          className={`w-[80%] grid   gap-4  ${isOtp ? "visible" : "hidden"}`}
        >
          <p className="my-2 text-lg text-white">
            <span className=" text-[2rem] px-2">Hurrah!</span> You are one step
            ahead to get your password back
          </p>
          <p className="my-2 text-lg text-white">
            Verify yourself by enter otp
          </p>
          <div className="col">
            <input
              type="text"
              minLength={6}
              maxLength={6}
              placeholder="enter Otp"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              className="p-2 rounded-md  self-center focus:ring-2 w-[60%] "
            />
          </div>
          <div className=" my-4 self-center">
            <button
              onClick={handleVerify}
              className="bg-navy py-2  hover:text-cgreen hover:bg-white text-white px-10 my-4"
            >
              Verify
            </button>
          </div>
        </div>
        {message ? (
          <div className="text-red-900  my-4 text-lg">{message}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
