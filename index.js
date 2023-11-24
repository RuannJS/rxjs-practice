// Creating an observable

const { Observable } = require("rxjs");
const { map } = require("rxjs");

const users = {
  data: [
    { status: "active", age: 14 },
    { status: "inactive", age: 32 },
    { status: "inactive", age: 18 },
    { status: "active", age: 17 },
    { status: "active", age: 14 },
    { status: "inactive", age: 32 },
    { status: "active", age: 18 },
    { status: "active", age: 17 },
  ],
};

const observable = new Observable((subscriber) => {
  subscriber.next(users);
}).pipe(
  // First Operator just "opens" the data and sends to the next Operator.
  map((value) => {
    console.log("1 - First Operator ", value);
    return value.data;
  }),
  map((value) => {
    console.log("2 - Second Operator", value);
    return value.filter((user) => user.status === "active");
  }),
  map((value) => {
    console.log("3 - Third operator", value);
    return value.reduce((sum, user) => sum + user.age, 0) / value.length;
  }),
  map((value) => {
    console.log("4 - Fourth Operator", value);
    if (value < 18) throw new Error("Average age is too low");
    else return value;
  })
);

const observer = {
  next: (value) => {
    console.log(`Observer got a value of ${value}`);
  },
  error: (error) => {
    console.log(`Observer got an error of ${error}`);
  },
  complete: () => {
    console.log("Observer got a complete notification!");
  },
};

observable.subscribe(observer);
