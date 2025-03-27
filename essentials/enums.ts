enum Role {
  Admin, // 0
  Editor, // 1
  Guest, // 2
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
