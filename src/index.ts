import express, { Request, Response } from "express";
import { UserController } from "./controller/UserController";
import { router } from "./routes";

const userController = new UserController();

const server = express();
server.use(express.json());
server.use(router);

server.get("/", (req: Request, resp: Response) => {
  return resp.status(200).json({ message: "DioBank API" });
});

server.post("/user", userController.createUser);
server.get("/user", userController.getAllUsers);

server.listen(5000, () => console.log("Servidor Ligado!"));
