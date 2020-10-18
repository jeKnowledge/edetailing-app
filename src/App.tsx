import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
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
    </IonReactRouter>
  </IonApp>
);

export default App;
