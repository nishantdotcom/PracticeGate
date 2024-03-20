import React from "react";

function MainLeftHeader() {
  return (
    <div className=" ">
      <div className="grid grid-cols-12 pt-8">
        <div className=" col-start-2 col-span-10 md:col-start-2 md:col-span-8  p-2 rounded-xl bg-[#3e3e3e] flex justify-between">
          <div className="text-gray-100 font-bold tracking-wide text-lg hover:bg-slate-600 hover:opacity-55 hover:rounded-xl flex justify-start  p-2">
            <div className="text-4xl">🧠</div>
            <div className="text-2xl m-1 text-slate-400 text-opacity-35">
              Practise
            </div>
          </div>

          <div className=" tracking-wide   p-2">
            <div className=" pt-2 ">
              <input
                type="checkbox"
                className=" form-checkbox h-6 w-6 accent-gray-400   border-0  bg-transparent  bg-red-400 text-transparent focus-within:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLeftHeader;
