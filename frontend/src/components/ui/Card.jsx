import React from "react";

function Card(props) {
  return (
    <div className="p-10">
      <div className="bg-green-500 h-40 w-72 rounded-lg p-4 shadow-2xl ">
        <div className="text-lg text-white font-semibold">
          {props.data.title}
        </div>
        <div className=" pt-2 text-sm text-white">{props.data.subTitle}</div>
        <button className="  bg-white mt-2 rounded-lg  font-bold text-green-500 text-sm p-2 shadow-xl hover:bg-gray-200 hover:text-opacity-80">
          {props.data.buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
