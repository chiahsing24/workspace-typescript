let userName: string;
let userAge = 38;

userName = "Max";

function add(a: number, b = 5) {
  console.log(`[add] a=${a}, b=${b}, a + b = `, a + b);
  return a + b;
}

add(10);
