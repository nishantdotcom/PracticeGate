import React from "react";
import MainLeftHeader from "./MainLeftHeader";
import FrontCard from "./FrontCard";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <div className=" h-max-screen bg-[#313131]">
      <div className="grid grid-cols-12 pt-8">
        <div className=" col-start-2 col-span-10 md:col-start-5 md:col-span-4  p-2 rounded-xl bg-[#3e3e3e] flex justify-between">
          <div className="text-gray-100 font-bold tracking-wide text-lg hover:bg-slate-600 hover:opacity-55 hover:rounded-xl  p-1">
            <div className="text-2xl">📋</div>
          </div>

          <div className="text-gray-100 font-bold tracking-wide text-lg hover:bg-slate-600 hover:opacity-55 hover:rounded-xl  p-2">
            Practise Gate
          </div>
          <div className="text-gray-100 font-bold tracking-wide text-lg hover:bg-slate-600 hover:opacity-55 hover:rounded-xl  p-1">
            <div className="text-2xl">😇</div>
          </div>
        </div>
      </div>
      <div className="pt-4 md:flex md:justify-center">
        <div className="md:w-[50%]">
          <div className=" text-5xl m-6 font-extrabold tracking-tight">
            <div className="flex justify-center md:justify-start text-slate-300 text-opacity-90">
              Practice Makes
            </div>
            <div className="flex justify-center md:justify-start text-green-500 pt-2">
              A Man Perfect
            </div>
          </div>
          <div className="text-lg  text-white m-8 md:m-6 tracking-wider ">
            Topic-wise practice of GATE CSE previous year questions is an
            effective approach for candidates preparing for the GATE 2024 CSE
            examination.
          </div>
          <div className="m-6">
            <Link to="/question">
              <div className="pt-2 pb-2 flex justify-center md:justify-start">
                <button className=" w-64 md:p-4 p-2  rounded-lg bg-green-500 md:text-xl font-bold text-gray-200 hover:bg-green-600 ">
                  Start Practise
                </button>
              </div>
            </Link>
            <div className=" pt-2 pb-2 flex justify-center md:justify-start">
              <button className="w-64 m:p-4 p-2 rounded-lg md:text-xl font-bold text-slate-300 text-opacity-90 hover:text-slate-100 hover:bg-slate-600 hover:opacity-60 hover:rounded-lg">
                I dont have an account
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[50%]  md:pt-28">
          <div className="">
            <MainLeftHeader />
          </div>
        </div>
      </div>
      <div className="text-white">
        <FrontCard />
      </div>
    </div>
  );
}

export default Heading;
