let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Max",
  age: 38,
  hobbies: ["Sports", "Cooking"],
  role: {
    description: "admin",
    id: 5,
  },
};

let val: {} = "some text";
val = null;
val = undefined;
val = "123";
val = 123;
val = {};
