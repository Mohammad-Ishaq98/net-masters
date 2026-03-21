import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 ">
            <div className="lg:mx-auto text-left">
              <h4 className="">Pagedone</h4>
              <ul className="">
                <li className="">
                  <a href="javascript:;" className="">
                    Home
                  </a>
                </li>
                <li className="">
                  <a href="javascript:;" className=" ">
                    About
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className=" ">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left ">
              <h4 className="">Pagedone</h4>
              <ul className="">
                <li className="">
                  <a href="javascript:;" className="">
                    Home
                  </a>
                </li>
                <li className="">
                  <a href="javascript:;" className="">
                    About
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-left">
              <h4 className="">Products</h4>
              <ul className="">
                <li className="">
                  <a href="javascript:;" className="">
                    Figma UI System
                  </a>
                </li>
                <li className="">
                  <a href="javascript:;" className="">
                    Icons Assets
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="">
                    Responsive Blocks
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-left ">
              <h4 className="">Resources</h4>
              <ul className="">
                <li className="">
                  <a href="javascript:;" className="">
                    FAQs
                  </a>
                </li>
                <li className="">
                  <a href="javascript:;" className="">
                    Quick Start
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-left ">
              <h4 className="">Support</h4>
              <ul className="">
                <li className="">
                  <a href="javascript:;" className="">
                    Customer Support
                  </a>
                </li>
                <li className="">
                  <a href="javascript:;" className="">
                    License
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" border-t border-gray-200">
            <div className="flex items-center justify-center ">
              <span className="">
                ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
                reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
