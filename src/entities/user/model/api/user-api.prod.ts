import type { IUserRepository, User } from "../user.types";

export class UserProdApi implements IUserRepository {
  async getUsers(): Promise<User[]> {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
  }
}
