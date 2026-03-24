"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { MenuItem, MobMenuProps, SubMenuItem } from "@/types";
import { iconMap } from "@/app/lib/iconMap";

const MobMenu: React.FC<MobMenuProps> = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<number | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: { height: "auto", overflow: "hidden" },
    exit: { height: 0, overflow: "hidden" },
  };

  return (
    <div>
      <button
        className="lg:hidden relative w-8 h-8 flex items-center justify-center"
        onClick={toggleDrawer}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <X size={38} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <Menu size={38} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <motion.div
        className="fixed z-[9999] left-0 right-0 top-26 h-full md:w-[100%] overflow-x-hidden bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map((menu: MenuItem, i: number) => {
            const { name, subMenu } = menu;
            const isClicked = clicked === i;
            const hasSubMenu = !!subMenu?.length;

            return (
              <li key={name} className=" border-b border-amber-100">
                {hasSubMenu ? (
                  <span
                    className="flex items-center gap-2 p-4 hover:bg-white/5 rounded-md cursor-pointer"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    {name}
                    <ChevronDown
                      size={20}
                      className={`shrink-0 ml-[65%] text-white transition-transform duration-200 ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                ) : (
                  <Link
                    href={menu.href ?? "#"}
                    onClick={toggleDrawer}
                    className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md"
                  >
                    {name}
                  </Link>
                )}

                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu?.map((submenu: SubMenuItem, idx: number) => {
                      const Icon = submenu.icon ? iconMap[submenu.icon] : null;

                      return (
                        <Link
                          key={idx}
                          href={submenu.href ?? "#"}
                          onClick={toggleDrawer}
                          className="p-2 flex items-center gap-2 hover:bg-white/5 rounded-md"
                        >
                          {Icon && <Icon size={16} />}
                          {submenu.name}
                        </Link>
                      );
                    })}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
        <button
          aria-label="sign-in"
          className="bg-white text-black z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center mt-4"
        >
          Sign In
        </button>
      </motion.div>
    </div>
  );
};

export default MobMenu;
