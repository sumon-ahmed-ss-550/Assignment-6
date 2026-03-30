import React from "react";

const StepCard = ({ stepCardImg, number, title, description }) => {
  return (
    <div className="max-w-95 border border-[#F1F1F1] pt-6 px-6 pb-22 rounded-2xl">
      <div className="flex justify-end">
        <div className="w-6 h-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full font-bold text-sm text-white flex justify-center items-center">
          {number}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="p-5 bg-[#f4e8fe] rounded-full mb-4">
          <img className=" w-15 h-15" src={stepCardImg} alt="" />
        </div>
        <h2 className="font-bold text-2xl text-[#101727] mb-4">{title}</h2>
        <p className="font-normal text-base leading-5 text-[#627382] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
