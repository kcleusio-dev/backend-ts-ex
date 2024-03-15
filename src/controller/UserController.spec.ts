import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    getAllUsers: jest.fn(),
  };

  const userController = new UserController(mockUserService as UserService);
  const mockResponse = makeMockResponse();

  it("Deve adiconar um novo usuário", () => {
    const mockRequest = {
      body: {
        name: "Helder",
        email: "helder@gmail.com",
      },
    } as Request;

    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "Usuário criado com sucesso!",
    });
  });

  it("Deve informar um erro caso o usuário não informe a nome", () => {
    const mockRequest = {
      body: {
        name: "helder",
        email: "helder.daniel7@outlook.pt",
      },
    } as Request;
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "Usuário criado com sucesso!",
    });
  });

  it("Deve informar um erro caso o usuário não informe o email", () => {
    const mockRequest = {
      body: {
        name: "Helder",
        email: "kcleusio.dev@gmail.com",
      },
    } as Request;
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "Usuário criado com sucesso!",
    });
  });

  it("Deve listar os usuários", () => {
    const mockRequest = makeMockRequest({});
    userController.getAllUsers(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
  });

  it("Deve apagar o usuário retornando uma msg", () => {
    const mockRequest = {
      body: {
        name: "Helder",
        email: "kcleusio@gmail.com",
      },
    } as Request;
    userController.deleteUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toMatchObject({
      message: "Usuário apagado com sucesso!",
    });
  });
});
