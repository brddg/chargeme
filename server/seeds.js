import People from "../lib/people";

if (People.find().count() === 0) {
  for (let i = 0; i < 100; i++) {
    People.insert({
      email: `test${i+1}@test.com`,
      charged: false,
      error: false,
      card: "4111111111111111",
      month: 12,
      year: 2020,
      cvc: 111,
      zip: "11111",
    });
  }
}
