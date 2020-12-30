import React, { useCallback, useState } from "react";
import {
  ChildButton,
  Directions,
  FloatingMenu,
  MainButton,
} from "react-floating-button-menu";
import { useHistory } from "react-router";
import "./../ConsultancyFloatingMenu/ConsultancyFloatingMenu.css";

const OtherPagesFloatingMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const history = useHistory();
  const home = useCallback(() => {
    history.replace("/home");
    // TODO: maybe there is another way to reset history stack?
    // window.location.reload();
  }, [history]);

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
          icon={<img src="/assets/menu-home.svg" alt="home" />}
          background="transparent"
          size={80}
          onClick={home}
        />
      </FloatingMenu>
    </span>
  );
};

export default React.memo(OtherPagesFloatingMenu);
