import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-[#030c1d] to-[#01051b] py-[7rem]">
        <div className="template">
          <div className="top">
            <div className="social_wrapper space-x-3 sm:space-x-[2.5rem] text-xs sm:text-xl">
              <Link href="#">Instagram</Link>
              <Link href="#">YouTube</Link>
              <Link href="#">Facebook</Link>
              <Link href="#">X (Former Twitter)</Link>
            </div>
          </div>
          <div className="center mt-[3rem] md:mt-[8rem] mt-[1rem] md:mb-[3rem]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl text-amber-50">
              Let's work together <br />
              just drop us a line - <Link href="#">info@xmpl.com</Link>
            </h1>
          </div>

          <div className="bottom text-xs sm:text-lg">
            <p>Net Masters © 2026. All Rights Reserved. </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
