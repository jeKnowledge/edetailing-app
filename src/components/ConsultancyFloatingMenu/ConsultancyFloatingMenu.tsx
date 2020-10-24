import React, { useCallback, useState } from "react";
import {
  ChildButton,
  Directions,
  FloatingMenu,
  MainButton,
} from "react-floating-button-menu";
import { useHistory } from "react-router";
import "./ConsultancyFloatingMenu.css";

interface ConsultancyFloatingMenuProps {
  backButtonAction?: () => void;
  homeButtonAction?: () => void;
}

const ConsultancyFloatingMenu = ({
  backButtonAction,
  homeButtonAction,
}: ConsultancyFloatingMenuProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const history = useHistory();

  const home = useCallback(() => {
    if (homeButtonAction) homeButtonAction();
    else {
      history.replace("/home");
      // TODO: maybe there is another way to reset history stack?
      window.location.reload();
    }
  }, [history, homeButtonAction]);

  const back = useCallback(() => {
    if (backButtonAction) backButtonAction();
    else history.goBack();
  }, [backButtonAction, history]);

  return (
    <span id="floating-button">
      <FloatingMenu
        slideSpeed={500}
        direction={Directions.Down}
        spacing={1}
        isOpen={menuIsOpen}
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
          onClick={() => setMenuIsOpen((prev) => !prev)}
          size={80}
        />
        <ChildButton
          icon={<img src="/assets/menu-icon.svg" alt="home" />}
          background="transparent"
          size={80}
          onClick={home}
        />
        <ChildButton
          icon={<img src="/assets/menu-icon.svg" alt="home" />}
          background="transparent"
          size={80}
          onClick={back}
        />
      </FloatingMenu>
    </span>
  );
};

export default React.memo(ConsultancyFloatingMenu);
