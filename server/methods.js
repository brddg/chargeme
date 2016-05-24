import { Meteor } from "meteor/meteor";
Future = Npm.require("fibers/future");

Meteor.methods({

  runCharge: (email) => {
    const f = new Future();

    const Stripe = StripeAPI(Meteor.settings.stripe.secret);

    Stripe.charges.create({
      amount: 1000,
      currency: "usd",
      source: Meteor.settings.stripe.card
    }, function(err, charge) {
      if (err) console.log(err);
      f.return(charge);
    });

    return f.wait();
  },

})
