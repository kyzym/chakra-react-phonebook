export interface Login {
  email: string;
  password: string;
}

import { ReactNode } from 'react';

export interface User {
  name: string | null;
  email: string | null;
}

export interface AuthRegisterResponse {
  user: User;
  token: string | null;
}

export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface UserCredentials extends User {
  name: string;
  email: string;
  password: string;
}

export type RouteProps = {
  children: ReactNode;
  redirectTo?: string;
};
