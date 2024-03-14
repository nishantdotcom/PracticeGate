import React from "react";
import Card from "./ui/Card";
const cardData = [
  {
    title: "Practise GATE Top Previous Year Questions",
    subTitle: " Top question curated from GATE PYQS",
    buttonText: "Start Practicing",
    id: 0,
  },
  {
    title: "Revise GATE Maths PYQ Questions",
    subTitle: " Top question asked in Gate",
    buttonText: "Start Practicing",
    id: 1,
  },
  {
    title: "Practise GATE Top Algorithm  Questions",
    subTitle: " Top question curated from GATE PYQS",
    buttonText: "Start Learning",
    id: 2,
  },
];

function Test() {
  return (
    <div className=" flex justify-start gap-x-10 ">
      {cardData.map((data) => {
        return (
          <div key={data.id}>
            <Card data={data} />
          </div>
        );
      })}
    </div>
  );
}

export default Test;
