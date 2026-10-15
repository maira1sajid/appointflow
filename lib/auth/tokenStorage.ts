import type { AuthTokens, AuthUser } from "@/lib/api/types";

const ACCESS_TOKEN_KEY = "appointflow_access_token";
const REFRESH_TOKEN_KEY = "appointflow_refresh_token";
const USER_KEY = "appointflow_user";
const AUTH_CHANGE_EVENT = "appointflow-auth-change";

function notifyAuthChange(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

export function getAccessToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function setTokens(tokens: AuthTokens): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(ACCESS_TOKEN_KEY, tokens.access);
  localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refresh);
}

export function setAccessToken(accessToken: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export function setStoredUser(user: AuthUser): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  notifyAuthChange();
}

export function clearAuthStorage(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  notifyAuthChange();
}

let cachedRaw: string | null = null;
let cachedUser: AuthUser | null = null;

export function getAuthSnapshot(): AuthUser | null {
  const raw = typeof window !== "undefined" ? localStorage.getItem(USER_KEY) : null;
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedUser = raw ? (JSON.parse(raw) as AuthUser) : null;
  }
  return cachedUser;
}

export function getAuthServerSnapshot(): AuthUser | null {
  return null;
}

export function subscribeToAuthChanges(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener(AUTH_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(AUTH_CHANGE_EVENT, callback);
  };
}
