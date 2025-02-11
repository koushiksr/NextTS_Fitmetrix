import { Session, User } from 'next-auth';

export interface CustomUser extends User {
  role: string;
}

export interface CustomSession extends Session {
  user: CustomUser;
}

export interface CustomToken {
  role: string;
  email: string;
  name: string;
  id: string;
  picture: string;
  exp: number;
  iat: number;
  jti: string;
  sub: string;
}
