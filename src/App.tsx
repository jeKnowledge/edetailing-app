import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  home as homeIcon,
  hourglass as hourglassIcon,
  mail as mailIcon,
} from "ionicons/icons";
import HomePage from "./pages/HomePage";
import HourglassAnimation from "./pages/tests/HourglassAnimation";
import PredefinedEmails from "./pages/tests/PredefinedEmails";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" exact={true}>
            <HomePage />
          </Route>
          <Route path="/tests/hourglass" exact={true}>
            <HourglassAnimation />
          </Route>
          <Route path="/tests/emails" exact={true}>
            <PredefinedEmails />
          </Route>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeIcon} />
            <IonLabel>HomePage</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tests-hourglass" href="/tests/hourglass">
            <IonIcon icon={hourglassIcon} />
            <IonLabel>Hourglass Animation</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tests-emails" href="/tests/emails">
            <IonIcon icon={mailIcon} />
            <IonLabel>Predefined Emails</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
