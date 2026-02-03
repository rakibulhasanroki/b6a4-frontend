export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export enum Role {
  admin = "ADMIN",
  customer = "CUSTOMER",
  seller = "SELLER",
}
