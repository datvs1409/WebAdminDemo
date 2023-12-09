import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Products from "../pages/Products";
import Inventory from "../pages/Inventory";
import Storage from "../pages/Storage";
import Settings from "../pages/Settings";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/customers" component={Customers} />
      <Route path="/products" component={Products} />
      <Route path="/orders" component={Inventory} />
      <Route path="/inventory" component={Storage} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
};

export default Routes;
