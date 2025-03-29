function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();

type UserType = {
  name: "string";
  age: number;
  role?: "admin" | "guest";
};

let input = null;
const didProvideInput = input || false;
const nullishCoalescing = input ?? false;
