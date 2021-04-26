import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { FilmsList } from "./Films";
import { Description } from "./Description";
import { HookSelect } from "./HookSelect";

export default function App() {
  return (
    <Router basename="/react-router-star-wars">
      <Switch>
        <Route path="/">
          <Description />
          <HookSelect />

          <hr />

          <FilmsList />
        </Route>
      </Switch>
    </Router>
  );
}
