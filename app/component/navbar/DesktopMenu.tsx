"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { DesktopMenuProps, SubMenuItem } from "@/types";
import { iconMap } from "@/app/lib/iconMap";
import { Transition } from "framer-motion";

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menu }) => {
  const [isHover, setIsHover] = useState(false);

  const subMenuTransition: Transition = {
    duration: 0.3,
    ease: "easeInOut",
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      display: "block",
      transition: subMenuTransition,
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      display: "none",
      transition: { ...subMenuTransition, duration: 0.2 },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="relative text-[1.175rem]"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <Link
        href={menu.href ?? "#"}
        className="flex items-center p-3 link"
      >
        {hasSubMenu && (
          <ChevronDown className="mt-[0.0375rem] transition-transform duration-200" />
        )}
        {menu.name}
      </Link>

      {hasSubMenu && (
        <motion.div
          className="absolute -left-23 top-[143%] w-max bg-[#18181A] p-3 rounded-2xl z-50"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-6 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
            }`}
          >
            {menu.subMenu?.map((submenu: SubMenuItem, i: number) => {
              const Icon = submenu.icon ? iconMap[submenu.icon] : null;

              return (
                <Link
                  href={submenu.href ?? "#"}
                  key={i}
                  className="relative cursor-pointer"
                >
                  {menu.gridCols &&
                    menu.gridCols > 1 &&
                    menu?.subMenuHeading?.[i] && (
                      <p className="text-sm mb-2 text-gray-500">
                        {menu.subMenuHeading[i]}
                      </p>
                    )}
                  <div className="flex items-center gap-3 group">
                    <div className="bg-white p-2 mt-4 rounded-md group-hover:bg-red-200 group-hover:text-gray-900 transition-colors duration-200">
                      {Icon && <Icon size={14} />}
                    </div>
                    <div>
                      <h6 className="font-semibold">{submenu.name}</h6>
                      <p className="text-sm text-gray-400">{submenu.desc}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          
        </motion.div>
      )}
    </motion.li>
  );
};

export default DesktopMenu;
