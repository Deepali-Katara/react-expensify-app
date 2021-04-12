import React from "react";
import ReactDOM from "react-dom";
import DashboardPage from "../components/DashboardPage";
import HeroesPage from "../components/HeroesPage";
import HomePage from "../components/HomePage";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { addHero } from "../actions/heroes";
import store from "../store/configStore";
import { BrowserRouter, Route, Switch } from "react-router-dom";

store.dispatch(addHero({ id: 20, name: "Tornado" }));

console.log(store.getState());

//console.log(heroOne);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/heroes" component={HeroesPage} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/header" component={Header} />
      </Switch>
    </div>
  </BrowserRouter>
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
