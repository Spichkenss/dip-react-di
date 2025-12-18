import { UserDTO } from "../../../shared/dto/user.dto";
import { UserEntity, UserId, UserRole } from "./user.types";

export class UserAdapter {
  static toUserId(id: string): UserId {
    return id as UserId;
  }

  static toEntity(dto: UserDTO): UserEntity {
    return {
      id: dto.id as UserId,
      name: dto.name,
      surname: dto.surname,
      role: dto.role as UserRole,
      email: dto.email,
      birthDate: new Date(dto.birthDate),
    };
  }
}
