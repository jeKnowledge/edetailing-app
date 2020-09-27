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
import Consultoria from "./pages/tests/Consultoria";
import EstiloImagemTotal from "./pages/Consultorias/EstiloImagemTotal/EstiloImagemTotal";

const App: React.FC = () => (
  <IonApp>
    {/* TODO: Extract this to component */}
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/consultorias/estilo-imagem-total" exact={true}>
            <EstiloImagemTotal />
          </Route>
          <Route path="/home" exact={true}>
            <HomePage />
          </Route>
          <Route path="/tests/hourglass" exact={true}>
            <HourglassAnimation />
          </Route>
          <Route path="/tests/emails" exact={true}>
            <PredefinedEmails />
          </Route>
          <Route path="/tests/consultoria" exact={true}>
            <Consultoria />
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
          <IonTabButton tab="tests-consultoria" href="/tests/consultoria">
            <IonIcon icon={homeIcon} />
            <IonLabel>Consultoria</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;