import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SavedBooks from "./pages/savedBooks";
import NotFound from "./pages/notFound";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={SavedBooks} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;