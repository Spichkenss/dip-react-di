import { axiosInstance } from "../../../../shared/api/axios";
import type { IUserRepository, User } from "../user.types";
import { injectable } from "inversify";

@injectable()
export class UserProdApi implements IUserRepository {
  async getAll(): Promise<User[]> {
    const result = await axiosInstance.get<User[]>("/users");
    return result.data;
  }

  remove(id: User["id"]): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
