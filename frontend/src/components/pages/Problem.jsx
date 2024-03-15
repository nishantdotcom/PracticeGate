import React from "react";
import Card from "../ui/Card";

import StudyPlan from "../ui/StudyPlan";
import YearWise from "../ui/YearWise";
function Problem() {
  const cardData = [
    {
      title: "Practise GATE Top Previous Year Questions",
      subTitle: " Top question curated from GATE PYQS",
      buttonText: "Start Practicing",
      id: 0,
    },
    {
      title: "Revise GATE Maths PYQ Questions",
      subTitle: " Top question asked Revise in Gate",
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
  const yearwise = [
    {
      id: 0,
      link: "/2024",
      year: 2024,
    },
    {
      id: 1,
      link: "/2023",
      year: 2023,
    },
    {
      id: 2,
      link: "/2022",
      year: 2022,
    },
    {
      id: 3,
      link: "/2021",
      year: 2021,
    },
    {
      id: 4,
      link: "/2020",
      year: 2020,
    },
    {
      id: 5,
      link: "/2019",
      year: 2019,
    },
  ];

  return (
    <div className="md:p-4 pt-2">
      <div className="  md:flex md:justify-start gap-x-2  ">
        {cardData.map((data) => {
          return (
            <div key={data.id} className="p-1">
              <Card data={data} />
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-12   gap-x-2 pt-4 gap-y-4 p-1">
        <div className="  col-span-12 md:col-span-9 bg-slate-200 rounded-lg">
          <StudyPlan />
        </div>
        <div className="col-span-12   md:col-span-3  bg-slate-200 rounded-lg ">
          <div className="  pt-4 flex justify-center text-slate-600 text-md">
            Year Wise Practise
          </div>
          <div className="pt-4 p-2 ">
            {yearwise.map((data) => {
              return (
                <div key={data.id} className=" inline-block">
                  <YearWise data={data} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Problem;
