import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FilmsList } from "./Films";
import {
  useCountryParameter,
  useCountryCompanyParameters
} from "./hooks/useCountryParam";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <FilmsList />
        </Route>
      </Switch>
    </Router>
  );
}