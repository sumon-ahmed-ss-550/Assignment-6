import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="shadow-sm py-6 sticky top-0 bg-white">
      <div className="container flex justify-between items-center">
        <div className="nav-start">
          <div className="flex items-center gap-2 lg:gap-0">
            <div onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <IoClose className="text-2xl lg:hidden cursor-pointer"></IoClose>
              ) : (
                <HiMenuAlt1 className="text-2xl lg:hidden cursor-pointer"></HiMenuAlt1>
              )}
            </div>
            <div>
              <ul
                className={`duration-300 flex flex-col gap-2 lg:hidden absolute bg-[#dcdde1] ${toggle ? "left-0" : "-left-250"} w-70 p-3 rounded top-25`}
              >
                <li>
                  <a
                    className="font-semibold text-base text-[#130f40] block"
                    href="#"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-base text-[#130f40] block"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-base text-[#130f40] block"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-base text-[#130f40] block"
                    href="#"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-base text-[#130f40] block"
                    href="#"
                  >
                    FAQ
                  </a>
                </li>

                <div className="divider">OR</div>

                <button className="btn btn-primary font-semibold text-base text-[#FFFFFF] bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                  Get Started
                </button>
              </ul>
            </div>
            <strong className="text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              DigiTools
            </strong>
          </div>
        </div>
        <div className="nav-center hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <a className="font-semibold text-base text-[#101727]" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="font-semibold text-base text-[#101727]" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="font-semibold text-base text-[#101727]" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="font-semibold text-base text-[#101727]" href="#">
                Testimonials
              </a>
            </li>
            <li>
              <a className="font-semibold text-base text-[#101727]" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-end flex items-center gap-4">
          <div className="flex items-center gap-4">
            <FiShoppingCart className="text-[#101727] w-5 h-5"></FiShoppingCart>
            <li>
              <a className="font-semibold text-base text-[#101727]" href="#">
                Login
              </a>
            </li>
          </div>
          <button className="btn btn-primary hidden lg:block font-semibold text-base text-[#FFFFFF] rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
