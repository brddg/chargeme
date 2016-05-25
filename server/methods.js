import { Meteor } from "meteor/meteor";
import People from "../lib/people";
Future = Npm.require("fibers/future");

Meteor.methods({

  runCharge: (id) => {
    const f = new Future();

    const person = People.findOne(id);

    const Stripe = StripeAPI(Meteor.settings.stripe.secret);

    Stripe.charges.create({
      amount: 1000,
      currency: "usd",
      source: Meteor.settings.stripe.card,
      metadata: {
        email: person.email,
      },
    }, Meteor.bindEnvironment(function(err, charge) {
      if (err) {
        People.update(id, { $set: { error: true } });
        f.throw(err);
      } else {
        People.update(id, { $set: { charged: true } });
        f.return(charge);
      }
    }));

    return f.wait();
  },

  importPeople: (csv) => {
    const people = csv.split("\n");
    people.map((person) => {
      People.insert({
        email: person,
        charged: false,
        error: false,
      });
    });
  },

  deleteEveryone: () => {
    People.remove({});
  },

})
