import React from "react";
import CardList from "./CardList";

const PricingCard = ({ info }) => {
  return (
    <div
      id="animatedCard"
      className={`card relative ${info.planName === "Pro" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-base-100"} shadow-sm`}
    >
      <div className="flex justify-center items-center">
        {info.planName === "Pro" && (
          <span className="px-3 py-1.5 bg-[#FEF3C6] rounded-full w-28 text-center font-medium text-sm text-[#BB4D00] absolute -top-3.75">
            Most Popular
          </span>
        )}
      </div>
      <div className="card-body">
        {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
        <div className="">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">{info.planName}</h2>
            <p>{info.description}</p>
          </div>
          <span className="text-xl">
            <span
              className={`font-bold text-[40px] ${info.planName === "Pro" ? "text-white" : "text-[#101727]"}`}
            >
              ${info.price}
            </span>
            /{info.duration}
          </span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs mb-auto">
          {info.features.map((list, index) => (
            <CardList key={index} list={list} info={info}></CardList>
          ))}
        </ul>
        <div className="mt-6">
          <button
            className={`btn ${info.planName === "Pro" ? "text-[#9514FA]" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"} btn-block  rounded-full`}
          >
            {info.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
