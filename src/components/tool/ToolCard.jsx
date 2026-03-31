import React, { useState } from "react";
import ToolCardList from "./ToolCardList";
import { toast } from "react-toastify";

const ToolCard = ({ card, count, setCount }) => {
  const isAlreadyAdded = count.some((item) => item.id === card.id);

  const [choose, setChoose] = useState(false);
  const handleByeBtn = () => {
    if (isAlreadyAdded) {
      return toast.error("is card already added");
    }
    const newElementHere = [...count, card];
    setCount(newElementHere);
    setChoose(true);
    toast.success("Card successfully added");
  };
  const isClicked = isAlreadyAdded || choose;

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body relative">
        <div className="text-right absolute top-1.5 right-1.5">
          <span
            className={`badge badge-xs px-3 py-2.5 font-medium text-sm ${card.price >= 1 && card.price <= 19 && "text-[#0A883E] bg-[#DBFCE7]"} ${card.price >= 20 && card.price <= 39 && "text-[#BB4D00] bg-[#FEF3C6]"} ${card.price >= 30 && card.price <= 79 && "text-[#4F39F6] bg-[#E1E7FF]"} border-0`}
          >
            {card.tag}
          </span>
        </div>
        <div className="mb-4 border border-[#F2F2F2] w-15 h-15 flex justify-center items-center rounded-full">
          <img className="w-8 h-8" src={card.icon} alt="" />
        </div>
        <div className="">
          <h2 className="text-bold text-2xl text-[#101727] mb-4">
            {card.name}
          </h2>
          <p className="font-normal text-base leading-5 text-[#627382] mb-4">
            {card.description}
          </p>
          <span className="font-bold text-2xl text-[#101727]">
            ${card.price}
            <span className="font-normal text-base text-[#101727]">
              /{card.period}
            </span>
          </span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {card.features.map((list, index) => (
            <ToolCardList key={index} list={list}></ToolCardList>
          ))}
        </ul>
        <div className="mt-6">
          <button
            onClick={() => handleByeBtn()}
            className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block rounded-full"
          >
            {isClicked === true ? "Subscribed" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
