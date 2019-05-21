import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/root-reducer";
import ScadaHome from "./scada-home/scada-home-container";
import StartupMiddleware from "./startup/startup-middleware";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(StartupMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={ScadaHome} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
