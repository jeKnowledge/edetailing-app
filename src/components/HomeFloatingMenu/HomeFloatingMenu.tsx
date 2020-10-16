import React, { SetStateAction } from "react";
import {
  ChildButton,
  Directions,
  FloatingMenu,
  MainButton,
} from "react-floating-button-menu";
import "./../ConsultancyFloatingMenu/ConsultancyFloatingMenu.css";

interface HomeFloatingMenuProps {
  isOpen: boolean;
  updateIsOpen: (v: SetStateAction<boolean>) => void;
}

const HomeFloatingMenu = ({ isOpen, updateIsOpen }: HomeFloatingMenuProps) => {
  return (
    <span id="floating-button">
      <FloatingMenu
        slideSpeed={500}
        direction={Directions.Down}
        spacing={8}
        isOpen={isOpen}
      >
        <MainButton
          iconResting={<img src="/assets/menu-icon.svg" alt="menu" />}
          iconActive={
            <img
              src="/assets/menu-icon.svg"
              alt="menu"
              style={{ transform: "rotate(45deg)" }}
            />
          }
          background="transparent"
          onClick={() => updateIsOpen((prev) => !prev)}
          size={80}
        />
        <ChildButton
          icon={<img src="/assets/menu-icon.svg" alt="home" />}
          background="transparent"
          size={80}
          onClick={() => void 0}
        />
        <ChildButton
          icon={<img src="/assets/menu-icon.svg" alt="home" />}
          background="transparent"
          size={80}
          onClick={() => void 0}
        />
      </FloatingMenu>
    </span>
  );
};

export default React.memo(HomeFloatingMenu);
