"use client";

import CountUp from "react-countup";

export default function CounterOnScroll() {
  return (
    <div className="template text-center grid grid-cols-4 gap-0.5 sm:gap-[2rem] lg:gap-[6.1rem] items-center [&>*:not(:first-child)]:md:border-l-2 border-gray-600">
      <div className="relative text-primary">
        <h3 className="text-[2.5rem] sm:text-[3rem] 2xl:text-[4rem] xl:text-[8rem] opacity-45">
          <CountUp end={12} duration={2} enableScrollSpy scrollSpyOnce />
        </h3>
        <p className="absolute text-xs sm:text-sm xl:text-xl inset-0 flex items-center justify-center font-semibold">
          Courts
        </p>
      </div>

      <div className="relative px-4 text-primary">
        <h3 className="text-[2.5rem] sm:text-[3rem] 2xl:text-[4rem] xl:text-[8rem] opacity-45">
          <CountUp end={15} duration={2} enableScrollSpy scrollSpyOnce />
        </h3>
        <p className="absolute text-xs sm:text-sm xl:text-xl inset-0 flex items-center justify-center font-semibold">
          Coaches
        </p>
      </div>

      <div className="relative px-4 text-primary">
        <h3 className="text-[2.5rem] sm:text-[3rem] 2xl:text-[4rem] xl:text-[8rem] opacity-45">
          <CountUp end={7} duration={2} enableScrollSpy scrollSpyOnce />
        </h3>
        <p className="absolute text-xs sm:text-sm xl:text-xl inset-0 flex items-center justify-center font-semibold">
          Clubs
        </p>
      </div>

      <div className="relative text-primary">
        <h3 className="text-[2.5rem] sm:text-[3rem] xl:text-[8rem] opacity-45">
          <CountUp end={19} duration={2} enableScrollSpy scrollSpyOnce />
        </h3>
        <p className="absolute text-xs sm:text-sm xl:text-xl inset-0 flex items-center justify-center font-semibold">
          Years
        </p>
      </div>
    </div>
  );
}
