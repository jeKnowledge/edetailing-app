import React, { SetStateAction } from "react";
import {
  ChildButton,
  Directions,
  FloatingMenu,
  MainButton,
} from "react-floating-button-menu";
import "./ConsultancyFloatingMenu.css";

interface ConsultancyFloatingMenuProps {
  backButtonAction: () => void;
  homeButtonAction: () => void;
  isOpen: boolean;
  updateIsOpen: (v: SetStateAction<boolean>) => void;
}

const ConsultancyFloatingMenu = ({
  backButtonAction,
  homeButtonAction,
  isOpen,
  updateIsOpen,
}: ConsultancyFloatingMenuProps) => {
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
          onClick={() => homeButtonAction()}
        />
        <ChildButton
          icon={<img src="/assets/menu-icon.svg" alt="home" />}
          background="transparent"
          size={80}
          onClick={() => backButtonAction()}
        />
      </FloatingMenu>
    </span>
  );
};

export default React.memo(ConsultancyFloatingMenu);
