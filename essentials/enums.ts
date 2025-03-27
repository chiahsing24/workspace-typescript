enum Role {
  Admin, // 0
  Editor, // 1
  Guest, // 2
  Reader,
}

let userRole: Role = Role.Admin;
userRole = 2;

enum RoleNew {
  Admin = 1,
  Editor = "Editor",
  Guest = "Guest",
}

let userNew: RoleNew = "Guest";
userNew = RoleNew.Guest;

let userRoleStr: "admin" | "editor" | "guest" = "editor";
userRoleStr = "guest";
userRoleStr = "random";

let possibleResults = [1 | -1, 1 | -1];
possibleResults = [Role.Admin, RoleNew.Admin];
possibleResults = [1, -1];

type CompanyRole = "admin" | "editor" | "guest" | "reader";

let employee: CompanyRole = "editor";
type Employee = {
  name: string;
  age: number;
  role: CompanyRole;
  permission: string[];
};
