import { IUser, UserService } from "./UserService";

describe("UserService", () => {
  const mockDb: IUser[] = [];
  const userService = new UserService(mockDb);

  it("Deve adicionar um usuário", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("helder", "helder.daniel7@outlook.pt");
    expect(mockConsole).toHaveBeenCalledWith('db actualizada...', mockDb);
  });
});
