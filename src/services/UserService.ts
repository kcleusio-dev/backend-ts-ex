const db = [
  {
    name: "Dayana",
    email: "dayana@evoluyr.ao",
  },
];

export class UserService {
  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };

    db.push(user);
    console.log("db actualizada...", db);
  };
  getAllUsers = () => {
    return db;
  };
}
