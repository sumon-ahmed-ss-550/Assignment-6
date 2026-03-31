import React, { Suspense, use } from "react";
import PricingCard from "./PricingCard";

const Pricing = ({ pricingCardInfo }) => {
  const cardInfo = use(pricingCardInfo);
  return (
    <section className="py-30">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-[48px] text-[#101727] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="font-normal text-base leading-5 text-[#627382]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {cardInfo.map((info) => (
            <PricingCard key={info.id} info={info}></PricingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
