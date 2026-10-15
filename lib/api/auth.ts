import { AxiosError } from "axios";
import { apiClient } from "@/lib/api/client";
import type { ApiErrorResponse, AuthResponse, LoginPayload, RegisterPayload } from "@/lib/api/types";

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>("/login/", payload);
  return data;
}

export async function register(payload: RegisterPayload): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>("/signup/", payload);
  return data;
}

export async function logout(refreshToken: string): Promise<void> {
  await apiClient.post("/logout/", { refresh: refreshToken });
}

export function getApiErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof AxiosError) {
    const data = error.response?.data as ApiErrorResponse | undefined;
    if (data?.message) return data.message;
    if (data?.detail) return data.detail;

    if (data) {
      const firstField = Object.values(data).find(
        (value) => typeof value === "string" || Array.isArray(value)
      );
      if (Array.isArray(firstField) && firstField.length > 0) return String(firstField[0]);
      if (typeof firstField === "string") return firstField;
    }
  }

  return fallback;
}
