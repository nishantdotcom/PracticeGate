import React from "react";

function PractiseCard() {
  return (
    <div className=" bg-[#3e3e3e] rounded-lg w-[min(100%,28rm)] md:w-[min(100%,20rm)] h-[min(100%,12rem)] flex justify-start shadow-2xl ">
      <div className="p-2">
        <img
          src="https://assets.leetcode.com/study_plan_v2/top-sql-50/cover"
          className="h-20 w-20 rounded-lg"
        ></img>
      </div>
      <div className="text-gray-100  m-3">
        <div className="text-lg font-bold ">Titile</div>
        <div className=" text-gray-100 text-sm tracking-tight ">
          sub title Lorem ipsum practise
        </div>
      </div>
    </div>
  );
}

export default PractiseCard;
