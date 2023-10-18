import React from "react";
type Props = {
  title: string;
  subtitle: string;
  stroffset: number;
  text: string;
};
const Heading = ({ title, subtitle, stroffset, text }: Props) => {
  return (
    <div className="w-[836px] flex justify-between">
      <div>
        <h3 className="font-inter text-3xl pb-4 font-semibold ">{title}</h3>
        <p className="text-base font-medium text-[#2D3643]">
          Next:{" "}
          <span className="text-base font-normal text-[#455468]">
            {subtitle}
          </span>
        </p>
      </div>
      <div className="flex flex-col ">
        <svg className="svg-pi ">
          <circle className="svg-pi-track" cx={50} cy={50} r={40} />

          <circle
            className="svg-pi-indicator"
            cx={50}
            cy={50}
            r={40}
            stroke-dashoffset={stroffset}
          />
          <text x={50} y={50} textAnchor="middle" dy=".3em">
            {text}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Heading;
