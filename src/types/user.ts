export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  phoneNumber: string;
  status: UserStatus;
}

export enum Role {
  admin = "ADMIN",
  customer = "CUSTOMER",
  seller = "SELLER",
}

export enum UserStatus {
  Active = "ACTIVE",
  Banned = "BANNED",
}
