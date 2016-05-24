const People = new Mongo.Collection("people");

People.schema = new SimpleSchema({
  email: { type: String },
});

People.attachSchema(People.schema);

export default People;
