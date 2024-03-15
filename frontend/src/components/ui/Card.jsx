import React from "react";

function Card(props) {
  return (
    <div className="  flex justify-center ">
      <div className="  bg-green-500 h-30 w-96 md:h-30 md:w-60 rounded-lg p-4   ">
        <div className=" text-md md:text-lg  text-white font-semibold">
          {props.data.title}
        </div>
        <div className=" pt-2 text-xs md:text-sm text-white">
          {props.data.subTitle}
        </div>
        <button className="  bg-white mt-2 rounded-lg  font-bold text-green-500 text-sm md:p-2 p-1 shadow-xl hover:bg-gray-200 hover:text-opacity-80">
          {props.data.buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
