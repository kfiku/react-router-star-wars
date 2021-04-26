import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { FilmsList } from "./Films";
import { HookSelect } from "./HookSelect";

export default function App() {
  return (
    <Router basename="/react-router-star-wars">
      <Switch>
        <Route path="/">
          <HookSelect />
          <FilmsList />
        </Route>
      </Switch>
    </Router>
  );
}
