import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import { MdNotificationsNone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import pic from "../../assets/pic.jpg";
import Topbar from "../ui/Topbar";
import SideBar from "../ui/SideBar";

function Home() {
  const [modal, setmodal] = useState(false);
  const [smallModal, setsmallModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleClick() {
    setmodal(true);
  }
  function handleHamburgerClick() {
    setsmallModal(true);
  }

  return (
    <div className=" bg-slate-900 text-white flex justify-between md:justify-start md:gap-x-10  sticky top-0 ">
      <div className="p-4 sticky">
        <div>
          <Link to="/">
            <SiLeetcode
              size={28}
              className="cursor-pointer hover:text-slate-400"
            />
          </Link>
        </div>
      </div>
      <div className="p-4 md:hidden">
        <div className="cursor-pointer" onClick={handleHamburgerClick}>
          <GiHamburgerMenu size={32} />
        </div>
      </div>
      {smallModal && <SideBar setshow={setsmallModal} />}
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
          {isLoggedIn ? (
            <>
              <div className="">
                <img
                  src={pic}
                  className="h-10 w-10 rounded-full hover:opacity-80 cursor-pointer object-cover"
                  onClick={handleClick}
                ></img>
              </div>
            </>
          ) : (
            <>
              <div className="  m-2">
                <div className="flex justify-center gap-x-3 text-sm">
                  <Link to={"/account/register-profile"}>
                    <div className=" text-gray-400 cursor-pointer  hover:text-white">
                      register
                    </div>
                  </Link>
                  <div className="text-gray-400">or</div>
                  <Link to={"/account/login"}>
                    <div className="text-gray-400 cursor-pointer hover:text-white">
                      sign in
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        {modal && (
          <>
            <Topbar setshow={setmodal} />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
