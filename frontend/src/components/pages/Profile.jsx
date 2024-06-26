import SideProfile from "../ui/SideProfile";
import ProfileCard from "../ui/ProfileCard";
function Profile() {
  return (
    <div className=" p-4 sm:pl-20 sm:pr-10 sm:pt-2 sm:pb-2 lg:flex  sm:gap-x-4 max-h-max bg-[#414a4c]">
      <div className=" lg:w-[30%]">
        <SideProfile />
      </div>
      <div className=" lg:w-[70%]  ">
        <ProfileCard />
      </div>
    </div>
  );
}

export default Profile;
