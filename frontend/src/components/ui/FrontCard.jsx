import React from "react";

const item = [
  {
    id: 0,
    emogie: "🎯",
    desc: "Set a goal",
  },
  {
    id: 1,
    emogie: "🏃",
    desc: "Try Your best",
  },
  {
    id: 2,
    emogie: "💪",
    desc: "Work smart & hard ",
  },
];

function FrontCard() {
  return (
    <div className="md:flex justify-center">
      {item.map((data) => {
        return (
          <div className="m-6 pb-10">
            <div className="rounded-lg w-80 p-4 bg-[#3e3e3e] flex justify-between gap-x-6 ">
              <div className="text-5xl pt-2">{data.emogie} </div>
              <div className="italic">{data.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FrontCard;
