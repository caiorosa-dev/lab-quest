export type UserRole = 'ADMIN' | 'MANAGER' | 'USER';

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};