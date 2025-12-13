export enum UserRole {
  ADMIN = "admin",
  GUEST = "guest",
}

export type UserId = Brand<string, "UserId">;

export type UserEntity = {
  id: UserId;
  name: string;
  surname: string;
  email: string;
  birthDate: Date;
  role: UserRole;
};
