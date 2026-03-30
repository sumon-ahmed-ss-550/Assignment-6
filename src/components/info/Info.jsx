import React from "react";

const Info = () => {
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15 mb-30">
      <div className="container grid sm:grid-cols-3 gap-6 justify-items-center">
        <div className="text-center">
          <h2 className="font-extrabold text-6xl text-white">50K+</h2>
          <span className="font-medium text-2xl text-white mt-3">
            Active Users
          </span>
        </div>
        <div className="text-center">
          <h2 className="font-extrabold text-6xl text-white">200+</h2>
          <span className="font-medium text-2xl text-white mt-3">
            Premium Tools
          </span>
        </div>
        <div className="text-center">
          <h2 className="font-extrabold text-6xl text-white">4.9</h2>
          <span className="font-medium text-2xl text-white mt-3">Rating</span>
        </div>
      </div>
    </section>
  );
};

export default Info;
