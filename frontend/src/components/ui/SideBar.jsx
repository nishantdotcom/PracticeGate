import React from "react";
import { MdOutlineShortcut } from "react-icons/md";
import pic from "../../assets/pic.jpg";
import { FaNoteSticky } from "react-icons/fa6";
import { IoMdBookmarks } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { MdStarRate } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { IoIosChatbubbles } from "react-icons/io";

function SideBar({ setshow }) {
  function handleCloseSideBar() {
    setshow(false);
  }
  return (
    <>
      <div className=" fixed top-16 right-0 h-full w-[80%] bg-gray-100 p-2">
        <span
          className="flex justify-end text-black cursor-pointer"
          onClick={handleCloseSideBar}
        >
          <MdOutlineShortcut size={24} />
        </span>
        <div className=" flex justify-start gap-x-2">
          <div>
            <Link to="/profile">
              <img
                src={pic}
                className="h-16 w-16 rounded-full object-cover"
                onClick={handleCloseSideBar}
              ></img>
            </Link>
          </div>
          <div className="text-black text-lg font-semibold  pt-4">
            Nishant Kumar
          </div>
        </div>
        <div className=" flex justify-start gap-x-2 pt-4">
          <div className="bg-slate-400 p-3 rounded-lg shadow-2xl cursor-pointer hover:opacity-85  ">
            <div className="flex justify-center ">
              <FaNoteSticky size={24} />
            </div>
            <div className="pt-1"> Notes</div>
          </div>
          <div className="bg-slate-400 p-3 rounded-lg shadow-2xl cursor-pointer hover:opacity-85">
            <div className=" flex justify-center">
              <IoMdBookmarks size={24} />
            </div>
            <div className="pt-1 "> Bookmark</div>
          </div>
          <div className="bg-slate-400 p-3 rounded-lg shadow-2xl cursor-pointer hover:opacity-85">
            <div className=" flex justify-center">
              <GiProgression size={24} />
            </div>
            <div className="pt-1" onClick={handleCloseSideBar}>
              {" "}
              Progress
            </div>
          </div>
        </div>
        <div className="pt-8">
          <div className="flex justify-start gap-x-4 text-gray-600 ">
            <div>
              <MdOutlineExplore size={20} />
            </div>
            <div className="text-sm hover:opacity-80 cursor-pointer">
              <Link to="/explore" onClick={handleCloseSideBar}>
                {" "}
                Explore
              </Link>
            </div>
          </div>
          <div className="flex justify-start gap-x-4 text-gray-600 pt-4">
            <div>
              <GrTask size={20} />
            </div>
            <div className="text-sm hover:opacity-80 cursor-pointer">
              <Link to="/problem" onClick={handleCloseSideBar}>
                {" "}
                Problem
              </Link>
            </div>
          </div>
          <div className="flex justify-start gap-x-4 text-gray-600 pt-4">
            <div>
              <IoIosChatbubbles size={20} />
            </div>
            <div className="text-sm hover:opacity-80 cursor-pointer">
              <Link to="/discuss" onClick={handleCloseSideBar}>
                {" "}
                Discuss
              </Link>
            </div>
          </div>
          <div className="flex justify-start gap-x-4 text-gray-600 pt-4">
            <div>
              <MdStarRate size={20} />
            </div>
            <div
              className="text-sm hover:opacity-80 cursor-pointer"
              onClick={handleCloseSideBar}
            >
              Rate Us
            </div>
          </div>
          <div className="flex justify-start gap-x-4 text-gray-600 pt-4">
            <div>
              <FaGithub size={20} />
            </div>
            <div
              className="text-sm hover:opacity-80 cursor-pointer"
              onClick={handleCloseSideBar}
            >
              Like the Project
            </div>
          </div>
          <div className="flex justify-start gap-x-4 text-gray-600 pt-4">
            <div>
              <MdLogout size={20} />
            </div>
            <div
              className="text-sm hover:opacity-80 cursor-pointer"
              onClick={handleCloseSideBar}
            >
              Log Out
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
