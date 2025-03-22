let hobbies = ["Sports", "Cooking"];
hobbies.push(10);

let hobbiesClearType: string[] = ["Sports", "Cooking"];
hobbiesClearType.push(10);

let users: (string | number)[];
users = [1, "Max"];
users = [5, 1];
users = ["Max", "Anna"];

let usersGenericType: Array<string | number>;
usersGenericType = [1, "Max"];
usersGenericType = [5, 1];
usersGenericType = ["Max", "Anna"];
