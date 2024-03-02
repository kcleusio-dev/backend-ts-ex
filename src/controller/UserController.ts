import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  createUser = (req: Request, res: Response) => {
    const userService = new UserService();
    const user = req.body;
    if (!user.name) {
      return res.status(400).json({ message: "BAD REQUEST! nome obrigatório" });
    }

    userService.createUser(user.name, user.email);
    return res.status(201).json({ message: "Usuário criado com sucesso!" });
  };

  getAllUsers = (req: Request, res: Response) => {
    const userService = new UserService();

    const users = userService.getAllUsers();
    return res.status(200).json(users);
  };
}
