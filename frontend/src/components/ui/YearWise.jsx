import React from "react";

function YearWise(props) {
  return (
    <div className="bg-gray-400 inline-block pt-1 pb-1 pl-2 pr-2 rounded-lg   font-medium text-slate-200 hover:text-white cursor-pointer m-2">
      {props.data.year}
    </div>
  );
}

export default YearWise;
