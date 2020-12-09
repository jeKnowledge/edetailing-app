import React, { useCallback, useState } from "react";
import {
  ChildButton,
  Directions,
  FloatingMenu,
  MainButton,
} from "react-floating-button-menu";
import { useHistory } from "react-router";
import "./../ConsultancyFloatingMenu/ConsultancyFloatingMenu.css";

const HomeFloatingMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const history = useHistory();
  const redirect = useCallback(
    (path: string) => {
      return history.push("" + path);
    },
    [history]
  );

  return (
    <span id="floating-button">
      <FloatingMenu
        slideSpeed={1000}
        direction={Directions.Down}
        spacing={0}
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
          onClick={() => setIsOpen((prev) => !prev)}
          size={80}
        />
        <ChildButton
          icon={<img src="/assets/menu-icon.svg" alt="home" />}
          background="transparent"
          size={80}
          onClick={() => redirect("/prices")}
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
