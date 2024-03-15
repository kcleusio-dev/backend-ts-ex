import { EntityManager } from "typeorm";
import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock";
import { UserRepository } from "./UserRepository";
import { User } from "../entities/User";

describe("UserRepository", () => {
  let userRepository: UserRepository;
  let managerMock: Partial<EntityManager>;

  const mockUser: User = {
    id_user: "12343",
    name: "Dayana",
    email: "Dayana@dayana.ao",
    password: "89947842",
  };

  beforeAll(async () => {
    managerMock = await getMockEntityManager({
      saveReturn: mockUser,
    });
    userRepository = new UserRepository(managerMock as EntityManager);
  });

  it("Deve Salvar um novo usuário no banco de dados", async () => {
    const response = await userRepository.createUser(mockUser);
    expect(managerMock.save).toHaveBeenCalled();
    expect(response).toMatchObject(mockUser);
  });
});
