import React, { useState } from "react";

function MainLeftHeader() {
  const randomData = [
    {
      id: 0,
      emogie: "💪",
      type: "Practise",
    },
    {
      id: 1,
      emogie: "🧠",
      type: "Apply logic",
    },
    {
      id: 2,
      emogie: "📋",
      type: "Test",
    },
    {
      id: 3,
      emogie: "📚",
      type: "Read",
    },
    {
      id: 4,
      emogie: "💬",
      type: "Dicuss",
    },
    {
      id: 5,
      emogie: "😇",
      type: "Grind",
    },
  ];
  const [state, setstate] = useState(0);
  const [ischecked, setisChecked] = useState(false);

  function handleEvent(event) {
    // alert("hii");
    console.log(event.target.checked);
    if (event.target.checked == true) {
      const x = (Math.random() * 100).toFixed(0);
      const y = x % 5;
      console.log(y);
      setstate(y);
      setisChecked(false);
    }
  }

  return (
    <div className="  ">
      <div className="grid grid-cols-12 pt-8 ">
        <div className=" col-start-2 col-span-10 md:col-start-4 md:col-span-8  p-2 rounded-xl bg-[#3e3e3e] flex justify-between">
          <div className="text-gray-100 font-bold tracking-wide text-lg hover:bg-slate-600 hover:opacity-55 hover:rounded-xl flex justify-start  p-2">
            <div className="text-4xl">{randomData[state].emogie}</div>
            <div className="text-2xl m-1 pt-1 text-slate-400 text-opacity-35">
              {randomData[state].type}
            </div>
          </div>

          <div className=" tracking-wide   p-2">
            <div className=" pt-2 ">
              <input
                type="checkbox"
                className=" form-checkbox h-6 w-6 accent-gray-400   border-0  bg-transparent  bg-red-400 text-transparent focus-within:hidden"
                onChange={(event) => {
                  handleEvent(event);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLeftHeader;
