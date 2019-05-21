import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import Search from "./pages/Search.jsx";
import Saved from "./pages/Saved.jsx";
import Home from "./pages/Home/index.jsx";
import NoMatch from "./pages/NoMatch.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;