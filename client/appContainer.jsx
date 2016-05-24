import { Meteor } from "meteor/meteor";
import People from "../lib/people";
import { createContainer } from "meteor/react-meteor-data";
import App from "./app";

export default AppContainer = createContainer(({ params }) => {

  const peopleHandle = Meteor.subscribe("people");
  const loading = !peopleHandle.ready();
  const people = People.find().fetch();

  return {
    loading,
    people,
  };

}, App);
