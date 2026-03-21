"use client"
import { Menus } from "@/app/data/Menu";
import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import CustomButtons from "../CustomButtons";
//https://gsap.com/community/forums/topic/21161-animated-mouse-cursor/
const NavBar = () => {
  return (
    <>
      <header className="bg-green-400">
        <div className="template mx-auto">
          <nav className="grid grid-cols-12 items-center circle">
            <div className="col-span-6 lg:col-span-3 z-[999] relative h-[6.3rem] w-full"> 
              <Image src="/home/net-masters.png" alt="logo" className="object-contain" fill/>
            </div>

            <ul className="hidden col-span-6 lg:col-span-9 lg:flex lg:justify-end lg:items-center lg:gap-x-2">
              {Menus.map((menu) => (
                <DesktopMenu menu={menu} key={menu.name} />
              ))}
              <div className="max-md:hidden">
                <CustomButtons
                title="Book Now"
                btnType="button"
                containerStyles="
                ml-[1rem]
                bg-[#5771F5]
                px-[1.25rem]
                py-[0.875rem]
                shadow-md
                hover:cursor-pointer
                "
                handleClick={() => {}}
              />
              </div>
            </ul>

            <div className="lg:hidden max-lg:flex col-span-6 justify-around">
              <MobMenu Menus={Menus} />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
