import React from "react";
import MainPage from "./Pages/MainPage";
import { Route, Switch, Redirect } from "react-router-dom";
import BecomeHostPage from "./Pages/BecomeHostPage";
import LocationDetailsPage from "./Pages/LocationDetailsPage";
///////////////////////////////////////////////
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/main" />
        </Route>
        <Route path="/main" exact>
          <MainPage />
        </Route>
        <Route path="/becomehost">
          <BecomeHostPage />
        </Route>
        <Route path="/location">
          <LocationDetailsPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
