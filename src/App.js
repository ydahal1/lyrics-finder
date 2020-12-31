import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Index from "./components/Layout/Index";
import Lyrics from "./components/tracks/Lyrics";

import { Provider } from "./context";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Provider>
        <Router>
          <Navbar />
          <div>
            <Switch>
              <Route path="/lyrics/track/:id" component={Lyrics} />
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
