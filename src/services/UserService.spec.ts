import { UserService } from "./UserService";

jest.mock("../repositories/UserRepository");

const mockUserRepository = require("../repositories/UserRepository");

describe("UserService", () => {
  const userService = new UserService(mockUserRepository);

  it("Deve adicionar um novo usuário", async () => {
    mockUserRepository.createUser = jest.fn().mockImplementation(() =>
      Promise.resolve({
        user_id: "12343",
        name: "Dayana",
        email: "Dayana@dio.me",
        password: "342342",
      })
    );
    const response = await userService.createUser(
      "helder",
      "Dayana@dio.me",
      "342342"
    );
    expect(mockUserRepository.createUser).toHaveBeenCalled();
    expect(response).toMatchObject({
      user_id: "12343",
      name: "Dayana",
      email: "Dayana@dio.me",
      password: "342342",
    });
  });
});
