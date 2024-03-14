import React from "react";
import pic from "../../assets/pic.jpg";
import { FaNoteSticky } from "react-icons/fa6";
import { IoMdBookmarks } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { MdStarRate } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MdOutlineShortcut } from "react-icons/md";
import { Link } from "react-router-dom";

function Topbar({ setshow }) {
  return (
    <div className="fixed z-20 top-16 right-20 h-80 w-72 bg-slate-100 rounded-xl p-2 shadow-2xl">
      <span
        className="flex justify-end text-black cursor-pointer"
        onClick={() => {
          setshow(false);
        }}
      >
        <MdOutlineShortcut size={16} />
      </span>
      <div className=" flex justify-start gap-x-2">
        <div>
          <Link to="/profile">
            <img
              src={pic}
              className="h-16 w-16 rounded-full object-cover"
              onClick={() => {
                setshow(false);
              }}
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
          <div className="pt-1"> Progress</div>
        </div>
      </div>
      <div className="pt-8">
        <div className="flex justify-start gap-x-4 text-gray-600">
          <div>
            <MdStarRate size={20} />
          </div>
          <div className="text-sm hover:opacity-80 cursor-pointer">Rate Us</div>
        </div>
        <div className="flex justify-start gap-x-4 text-gray-600 pt-4">
          <div>
            <FaGithub size={20} />
          </div>
          <div className="text-sm hover:opacity-80 cursor-pointer">
            Like the Project
          </div>
        </div>
        <div className="flex justify-start gap-x-4 text-gray-600 pt-4">
          <div>
            <MdLogout size={20} />
          </div>
          <div className="text-sm hover:opacity-80 cursor-pointer">Log Out</div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
