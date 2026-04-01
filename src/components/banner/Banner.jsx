import React from "react";
import bannerImg from "../../assets/banner.png";
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <section className="container">
      <div className="container-img-area py-21.25 flex justify-between items-center gap-6">
        <div className="content-area">
          <div className="flex items-center gap-1.25 bg-[#E1E7FF] py-3 px-4 rounded-full max-w-73.5">
            <div className="w-4 h-4 bg-[#d0befe] rounded-full flex justify-center items-center">
              <div className="w-3 h-3 bg-[#b27dfc] rounded-full flex justify-center items-center">
                <div
                  id="indicator"
                  className="w-1.5 h-1.5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full"
                ></div>
              </div>
            </div>
            <div>
              <p className="font-medium text-base bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                New: AI-Powered Tools Available
              </p>
            </div>
          </div>
          <div className="highlight my-8 max-w-160 space-y-4">
            <h1 className="font-extrabold text-[48px] sm:text-7xl leading-18 text-[#101727]">
              Super charge Your Digital Workflow
            </h1>
            <p className="font-normal text-lg leading-8 text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white p-4">
              Explore Products
            </button>
            <button className="btn border border-[#9514FA] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent bg-transparent btn-primary rounded-full p-4">
              <Play className="text-[#9514FA]"></Play> Watch Demo
            </button>
          </div>
        </div>
        <div className="img-area">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
