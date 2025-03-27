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

let dataObj: Record<string, number | string>;
dataObj = {
  entry1: 1,
  entry2: "some string",
};
