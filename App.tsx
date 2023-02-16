import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./Step1";

import "./styles.css";

createStore({
  data: {}
});

export default function App() {
  return (
    <StateMachineProvider>
      <h1>Page Form Wizzard</h1>

      <Router>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/result" component={Result} />
      </Router>
    </StateMachineProvider>
  );
}

exp