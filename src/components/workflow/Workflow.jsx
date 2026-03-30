import React from "react";

const Workflow = () => {
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-[40px] text-white mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="font-normal text-base text-white">
            Join thousands of professionals who are already using Digitools to
            work smarter.Start your free trial today.
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center flex-wrap gap-4 mb-4">
            <button className="bg-white px-4 py-3.75 rounded-full cursor-pointer">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold text-base">
                Explore Products
              </span>
            </button>
            <button className="duration-300 rounded-full cursor-pointer hover:bg-white">
              <span className="block rounded-full border border-white px-4 py-3.75 font-semibold text-base text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text hover:text-transparent">
                View Pricing
              </span>
            </button>
          </div>
          <span className="font-normal text-base leading-5 text-white">
            14-day free trial • No credit card required • Cancel anytime
          </span>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Workflow;
