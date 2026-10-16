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

export type BusinessCategory = {
  id: number;
  name: string;
  slug: string;
  description: string;
};

export type WorkingHourPayload =
  | { weekday: number; is_closed: true }
  | { weekday: number; is_closed: false; opening_time: string; closing_time: string };

export type BusinessRequestPayload = {
  business_name: string;
  category: number;
  business_phone: string;
  business_email?: string;
  city: string;
  address: string;
  description: string;
  owner_full_name: string;
  owner_email: string;
  owner_phone: string;
  working_hours: WorkingHourPayload[];
};

export type BusinessRequestResponse = {
  id: number;
  business_name: string;
  status: string;
  submitted_at: string;
};
