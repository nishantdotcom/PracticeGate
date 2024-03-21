import React from "react";
import PractiseCard from "./PractiseCard";
import Topicwise from "./Topicwise";

function StudyPlan() {
  return (
    <div className=" m-4">
      <div className=" flex justify-between pb-2">
        <div className="text-gray-100  text-2xl font-bold">Study Plan</div>
        <div className="text-blue-600 text-sm cursor-pointer  ">See all</div>
      </div>
      <div className=" grid grid-cols-12 gap-y-4 gap-x-4">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4  flex justify-center">
          <PractiseCard />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4  flex justify-center">
          <PractiseCard />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4  flex justify-center">
          <PractiseCard />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4  flex justify-center">
          <PractiseCard />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4  flex justify-center">
          <PractiseCard />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4  flex justify-center">
          <PractiseCard />
        </div>
      </div>
      <div className=" mt-2  bg-[#3e3e3e] rounded-xl">
        <div className="text-gray-100  text-2xl font-bold  pt-4 p-2">
          Topic Wise Problems
        </div>
        <div>
          <Topicwise />
        </div>
        <div>
          <Topicwise />
        </div>
        <div>
          <Topicwise />
        </div>
      </div>
    </div>
  );
}

export default StudyPlan;
