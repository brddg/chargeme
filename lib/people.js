const People = new Mongo.Collection("people");

People.schema = new SimpleSchema({
  email: { type: String },
  charged: { type: Boolean, defaultValue: false },
  error: { type: Boolean, defaultValue: false },
});

// People.attachSchema(People.schema);

export default People;
