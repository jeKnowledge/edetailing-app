import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home as homeIcon, mail as mailIcon } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import EstiloImagemTotal from "./pages/Consultorias/EstiloImagemTotal/EstiloImagemTotal";
import HomePage from "./pages/HomePage";
import Consultoria from "./pages/tests/Consultoria";
import PredefinedEmails from "./pages/tests/PredefinedEmails";

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
