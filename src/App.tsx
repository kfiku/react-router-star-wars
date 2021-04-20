import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FilmListMemo } from "./Films";
import { HookSelect } from "./HookSelect";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HookSelect />
          <FilmListMemo />
        </Route>
      </Switch>
    </Router>
  );
}
