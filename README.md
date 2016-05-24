# ChargeMe

Getting started:

```
$ meteor run --settings settings.json
```

Test settings file:

```json
{
  "stripe": {
    "secret": "test-secret",
    "card": {
      "number": "4111111111111111",
      "exp_month": 12,
      "exp_year": 2020,
      "object": "card",
      "cvc": 111
    }
  }
}
```
