import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { SignUp } from "../components/SignUp/SignUp";
import { Email } from "../components/SignUp/Email/Email";

export const RoutesMapping = () => {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/sign-up" exact={true}>
        <SignUp />
      </Route>
      <Route path="/sign-up-email" exact={true}>
        <Email />
      </Route>
    </Switch>
  );
};
