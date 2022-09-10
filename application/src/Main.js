import { Route, Switch } from "react-router-dom";
import Article from "./Article";
import Articles from "./Articles";
import Books from "./Books";
import Home from "./Home";
import People from "./People";

function Main() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/articles/:slug">
          <Article />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
