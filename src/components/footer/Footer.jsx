import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pt-30 pb-7.5 bg-[#101727]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div>
            <h2 className="font-bold text-white text-4xl mb-4">DigiTools</h2>
            <p className="max-w-87.5 font-normal text-base leading-6 text-white">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[20px] leading-7 text-white mb-4">
              Product
            </h3>
            <ul className="text-white">
              <li>
                <a
                  className="font-normal text-base leading-6 text-white mb-4"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="font-normal text-base leading-6 text-white mb-4"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="font-normal text-base leading-6 text-white mb-4"
                  href="#"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  className="font-normal text-base leading-6 text-white"
                  href="#"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[20px] leading-7 text-white mb-4">
              Company
            </h3>
            <ul className="text-white">
              <li>
                <a
                  className="font-normal text-base leading-6 text-white mb-4"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="font-normal text-base leading-6 text-white mb-4"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="font-normal text-base leading-6 text-white mb-4"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="font-normal text-base leading-6 text-white"
                  href="#"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[20px] leading-7 text-white mb-4">
              Resources
            </h3>
            <ul className="text-white">
              <li>
                <a
                  className="font-normal text-base leading-6 text-white mb-4"
                  href="#"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className="font-normal text-base leading-6 text-white mb-4"
                  href="#"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  className="font-normal text-base leading-6 text-white mb-4"
                  href="#"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  className="font-normal text-base leading-6 text-white"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[20px] leading-7 text-white mb-4">
              Social Links
            </h3>
            <div>
              <ul className="flex items-center gap-3">
                <li className="w-10 h-10 bg-white p-2.5 rounded-full flex justify-center items-center">
                  <a href="#">
                    <FaInstagramSquare></FaInstagramSquare>
                  </a>
                </li>
                <li className="w-10 h-10 bg-white p-2.5 rounded-full flex justify-center items-center">
                  <a href="#">
                    <FaFacebookSquare></FaFacebookSquare>
                  </a>
                </li>
                <li className="w-10 h-10 bg-white p-2.5 rounded-full flex justify-center items-center">
                  <a href="#">
                    <FaXTwitter></FaXTwitter>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider before:bg-gray-300 after:bg-gray-300"></div>
        <div className="sm:flex justify-between items-center">
          <span className="font-normal text-base leading-6 text-[#FAFAFA]">
            © 2026 Digitools. All rights reserved.
          </span>

          <div>
            <ul className="flex items-center gap-4">
              <li>
                <a
                  className="font-normal text-base leading-6 text-white mb-4"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="font-normal text-base leading-6 text-white mb-4"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="font-normal text-base leading-6 text-white mb-4"
                  href="#"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
