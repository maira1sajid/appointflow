export type AuthUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};

export type AuthTokens = {
  access: string;
  refresh: string;
};

export type AuthResponse = AuthTokens & {
  message: string;
  user: AuthUser;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
};

export type ApiErrorResponse = {
  message?: string;
  detail?: string;
  [field: string]: unknown;
};
