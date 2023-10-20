import React from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
  return (
    <div className="bg-cgreen/30 h-screen rlative">
      <div className=" flex justify-center items-center absolute top-0 ">
        <div className="animate-spin ">
          <FontAwesomeIcon
            icon={faCircleNotch}
            className=" h-[3rem] w-[3rem] "
          />
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
