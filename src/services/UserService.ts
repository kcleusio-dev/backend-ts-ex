export interface IUser {
  name: string;
  email: string;
}

const db = [
  {
    name: "Dayana",
    email: "dayana@evoluyr.ao",
  },
];

export class UserService {
  db: IUser[];

  constructor(database = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };

    this.db.push(user);
    console.log("db actualizada...", this.db);
  };
  getAllUsers = () => {
    return this.db;
  };
}
