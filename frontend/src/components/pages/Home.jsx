import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import { MdNotificationsNone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import pic from "../../assets/pic.jpg";

function Home() {
  return (
    <div className=" bg-slate-900 text-white flex justify-between md:justify-start md:gap-x-10 ">
      <div className="p-4">
        <div>
          <Link to="/">
            <SiLeetcode size={28} className="cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="p-4 md:hidden">
        <div>
          <GiHamburgerMenu size={32} />
        </div>
      </div>
      <div className="hidden md:flex justify-start gap-x-6">
        <div className=" p-4 text-md  text-slate-400 hover:text-white cursor-pointer font-medium   ">
          <Link to="/explore">Explore</Link>
        </div>

        <div className=" p-4 text-md  text-slate-400 hover:text-white cursor-pointer font-medium   ">
          <Link to="/problem">Problem</Link>
        </div>
        <div className=" p-4 text-md  text-slate-400 hover:text-white cursor-pointer font-medium   ">
          <Link to="/discuss">Discuss</Link>
        </div>
      </div>
      <div className=" hidden md:flex md:justify-end fixed top-0 right-10">
        <div className="p-4">
          <div className="pt-0.5">
            <MdNotificationsNone
              size={24}
              className=" text-slate-400 hover:text-white cursor-pointer"
            />
          </div>
        </div>
        <div className=" p-3">
          <div className=" ">
            <Link to="/profile">
              <img
                src={pic}
                className="h-10 w-10 rounded-full hover:opacity-80 cursor-pointer object-cover"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
