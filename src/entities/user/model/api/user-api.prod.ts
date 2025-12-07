import type { IUserRepository, User } from "../user.types";

export class UserProdApi implements IUserRepository {
  private readonly API_URL = "https://jsonplaceholder.typicode.com";

  async getUsers(): Promise<User[]> {
    const result = await fetch(`${this.API_URL}/users`);
    return result.json();
  }
}
