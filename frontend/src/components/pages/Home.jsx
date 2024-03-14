import React from "react";
import { useNavigate } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import { MdNotificationsNone } from "react-icons/md";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between bg-slate-900  border-b-4 border-red-400 p-4 text-white sticky">
        <div className="  flex justify-start  gap-x-16  ">
          <div>
            <div className="cursor-pointer">
              <SiLeetcode
                size={32}
                onClick={() => {
                  navigate("/");
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className=" flex justify-start gap-x-8 ">
            <div
              className=" text-md  text-slate-400 hover:text-white cursor-pointer font-medium"
              onClick={() => {
                navigate("/test");
              }}
            >
              Explore
            </div>
            <div
              className=" text-md  text-slate-400 hover:text-white cursor-pointer font-medium"
              onClick={() => {
                navigate("/test2");
              }}
            >
              Problem
            </div>
            <div
              className="text-md text-slate-400 hover:text-white cursor-pointer font-medium"
              onClick={() => {
                navigate("/test");
              }}
            >
              Discuss
            </div>
          </div>
        </div>
        <div className="text-white flex justify-end gap-x-6">
          <div className="text-slate-400 pt-1">
            <MdNotificationsNone size={24} />
          </div>
          <div>
            <div className=" p-4 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
