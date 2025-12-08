import type { IUserRepository, User } from "../user.types";
import { injectable } from "inversify";

@injectable()
export class UserMockApi implements IUserRepository {
  private users: User[] = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
  ];

  async getAll(): Promise<User[]> {
    return this.users;
  }

  remove(id: User["id"]): Promise<boolean> {
    const index = this.users.findIndex((user) => user.id === id);

    if (index !== -1) {
      this.users.splice(index, 1);
      return Promise.resolve(true);
    }

    return Promise.resolve(false);
  }
}
