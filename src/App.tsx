import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import ConsultancyWrapper from "./components/ConsultancyWrapper";
import DropboxPage from "./components/DropboxPage/index";
import PaulaPrada from "./components/PaulaPrada";
import Service from "./components/Service";
import { colorToConsultancy, ConsultancyID, serviceToColor } from "./data/data";
import HomePage from "./pages/Home/HomePage";
import Prices from "./pages/Prices/Prices";
import DropboxTest from "./tests/DropboxTest";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" exact={true}>
          <HomePage />
        </Route>

        {/* Consultancies */}
        {Object.keys(colorToConsultancy).map((color) => (
          <Route
            key={colorToConsultancy[color]}
            path={`/consultancy/${colorToConsultancy[color]}`}
            exact={true}
          >
            <ConsultancyWrapper
              key={colorToConsultancy[color]}
              consultancyId={colorToConsultancy[color] as ConsultancyID}
            />
          </Route>
        ))}

        {/* Services */}
        {Object.keys(serviceToColor).map((service) => (
          <Route key={service} path={`/services/${service}`} exact={true}>
            <Service key={service} serviceID={service} />
          </Route>
        ))}

        <Route path="/paulaprada" exact={true}>
          <PaulaPrada />
        </Route>

        <Route path="/prices" exact={true}>
          <Prices />
        </Route>

        <Route path="/dropbox" exact={true}>
          <DropboxTest />
        </Route>

        <Route path="/dropboxPage" exact={true}>
          <DropboxPage />
        </Route>

        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
