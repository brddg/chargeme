import { Meteor } from "meteor/meteor";
import People from "../lib/people";
Future = Npm.require("fibers/future");

Meteor.methods({

  runCharge: (id) => {
    const f = new Future();

    const person = People.findOne(id);

    const Stripe = StripeAPI(Meteor.settings.stripe.secret);

    Stripe.charges.create({
      amount: 350,
      currency: "usd",
      source: {
        number: person.card,
        exp_month: person.month,
        exp_year: person.year,
        object: "card",
        cvc: person.cvc,
      },
      metadata: {
        email: person.email,
        zip: person.zip,
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
      const parts = person.split(",");
      People.insert({
        email: parts[0],
        charged: false,
        error: false,
        card: parts[1],
        month: parts[2],
        year: parts[3],
        cvc: parts[4],
        zip: parts[5],
      });
    });
  },

  deleteEveryone: () => {
    People.remove({});
  },

})
