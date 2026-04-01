import React, { use, useState } from "react";
import ToolCard from "./ToolCard";
import SelectedCard from "./SelectedCard";

const Tool = ({ cardInformationData, count, setCount }) => {
  const cardInformation = use(cardInformationData);
  const [btnToggle, setBtnToggle] = useState("available");
  return (
    <section className="mb-30">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-5xl text-[#101727] mb-4">
            Premium Digital Tools{" "}
          </h2>
          <p className="font-normal text-base text-[#627382] mb-4">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
          <div className="flex justify-center items-center">
            <div className="border border-[#F6F6F6] w-62 p-1 rounded-full">
              <button
                onClick={() => setBtnToggle("available")}
                className={`btn border-0 ${btnToggle === "available" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} text-black rounded-full py-3.5 px-6 font-bold text-base`}
              >
                Products
              </button>
              <button
                onClick={() => setBtnToggle("selectedProduct")}
                className={`btn border-0 ${btnToggle === "selectedProduct" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} text-black rounded-full py-3.5 px-6 font-bold text-base`}
              >
                Cart ({count.length})
              </button>
            </div>
          </div>
        </div>

        {btnToggle == "available" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7.5">
            {cardInformation.map((card, index) => (
              <ToolCard
                count={count}
                setCount={setCount}
                key={index}
                card={card}
              ></ToolCard>
            ))}
          </div>
        ) : (
          <SelectedCard
            count={count}
            setCount={setCount}
            setBtnToggle={setBtnToggle}
          ></SelectedCard>
        )}
      </div>
    </section>
  );
};

export default Tool;
