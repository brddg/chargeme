import { Meteor } from "meteor/meteor";
import People from "../lib/people";

Meteor.publish("people", function() {
  return People.find();
});
