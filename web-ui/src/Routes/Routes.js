import React from "react";
import { Switch, Route } from "react-router-dom";
import { SignUp } from "../components/SignUp/SignUp";

export const RoutesMapping = () => {
  return (
    <Switch>
      <Route path="/sign-up" exact={true}>
        <SignUp />
      </Route>
    </Switch>
  );
};
