// Creating an observable

const { Observable } = require("rxjs");
const { map } = require("rxjs");

const users = {
  data: [
    { status: "inactive", age: 14 },
    { status: "active", age: 32 },
    { status: "inactive", age: 18 },
    { status: "active", age: 17 },
    { status: "active", age: 14 },
    { status: "active", age: 32 },
    { status: "active", age: 18 },
    { status: "active", age: 17 },
  ],
};

const observable = new Observable((subscriber) => {
  subscriber.next(users);
}).pipe();

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
