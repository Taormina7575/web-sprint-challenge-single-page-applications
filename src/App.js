import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Form from "./components/Form";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/pizza">
          <Form></Form>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
