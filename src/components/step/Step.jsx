import React from "react";
import StepCard from "./StepCard";
import userImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";

const Step = () => {
  return (
    <section className="bg-[#F9FAFC] py-30">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-5xl text-[#101727] mb-4">
            Get Started in 3 Steps
          </h2>
          <span className="font-normal text-base leading-5 text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7.5">
          <StepCard
            stepCardImg={userImg}
            number="01"
            title="Create Account"
            description="Sign up for free in seconds. No credit card required to get started."
          ></StepCard>
          <StepCard
            stepCardImg={packageImg}
            number="02"
            title="Choose Products"
            description="Browse our catalog and select the tools that fit your needs."
          ></StepCard>
          <StepCard
            stepCardImg={rocketImg}
            number="03"
            title="Start Creating"
            description="Download and start using your premium tools immediately."
          ></StepCard>
        </div>
      </div>
    </section>
  );
};

export default Step;
