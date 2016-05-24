import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import AppContainer from "./appContainer";

Meteor.startup(() => {
  render(<AppContainer />, document.getElementById("app"));
});
