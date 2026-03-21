
import { iconMap } from "@/app/lib/iconMap";
import { MouseEventHandler } from "react";

//////////////////*********** navbar prop ***********//////////////////

export interface SubMenuItem {
  name: string;
  desc?: string;
  icon?: keyof typeof iconMap;
}

export interface MenuItem {
  name: string;
  subMenu?: SubMenuItem[];
  subMenuHeading?: string[];
  gridCols?: number;
}

export interface MobMenuProps {
  Menus: MenuItem[];
}

export interface DesktopMenuProps {
  menu: MenuItem;
}

export interface SubMenuItem {
  name: string;
  desc?: string;
  icon?: string;
  href?: string;
}

export interface MenuItem {
  name: string;
  href?: string;
  subMenu?: SubMenuItem[];
  subMenuHeading?: string[];
  gridCols?: number;
}

//////////////////*********** Button prop ***********//////////////////
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}