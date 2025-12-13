/**
 * Common types
 */
export type UserDTO = {
  id: string;
  name: string;
  surname: string;
  email: string;
  role: string;
  birthDate: string;
};

/**
 * Get users
 */
export type GetUsersResponseDTO = UserDTO[];

/**
 * Remove user
 */
export type RemoveUserRequestDTO<T extends string = string> = {
  userId: T;
};

export type RemoveUserResponseDTO = boolean;
