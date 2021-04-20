import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FilmListMemo } from "./Films";
import { HookSelect } from "./HookSelect";

export default function App() {
  return (
    <Router basename="/react-router-star-wars">
      <Switch>
        <Route path="/">
          <HookSelect />
          <FilmListMemo />
        </Route>
      </Switch>
    </Router>
  );
}
