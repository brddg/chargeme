import People from "../lib/people";

if (People.find().count() === 0) {
  for (let i = 0; i < 100; i++) {
    People.insert({
      email: `test${i+1}@test.com`
    });
  }
}
