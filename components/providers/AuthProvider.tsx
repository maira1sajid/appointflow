"use client";

import { createContext, useCallback, useContext, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  login as loginRequest,
  logout as logoutRequest,
  register as registerRequest,
} from "@/lib/api/auth";
import type { AuthUser, LoginPayload, RegisterPayload } from "@/lib/api/types";
import {
  clearAuthStorage,
  getAuthServerSnapshot,
  getAuthSnapshot,
  getRefreshToken,
  setStoredUser,
  setTokens,
  subscribeToAuthChanges,
} from "@/lib/auth/tokenStorage";
import { useToast } from "@/components/providers/ToastProvider";

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const user = useSyncExternalStore(subscribeToAuthChanges, getAuthSnapshot, getAuthServerSnapshot);
  const router = useRouter();
  const { showToast } = useToast();

  const login = useCallback(
    async (payload: LoginPayload) => {
      const data = await loginRequest(payload);
      setTokens({ access: data.access, refresh: data.refresh });
      setStoredUser(data.user);
      showToast(`Welcome back, ${data.user.first_name}!`, "success");
      router.push("/");
    },
    [router, showToast]
  );

  const register = useCallback(
    async (payload: RegisterPayload) => {
      const data = await registerRequest(payload);
      setTokens({ access: data.access, refresh: data.refresh });
      setStoredUser(data.user);
      showToast(`Account created — welcome, ${data.user.first_name}!`, "success");
      router.push("/");
    },
    [router, showToast]
  );

  const logout = useCallback(async () => {
    const refreshToken = getRefreshToken();
    try {
      if (refreshToken) await logoutRequest(refreshToken);
    } catch {
      // Session is cleared locally regardless of whether the API call succeeds.
    } finally {
      clearAuthStorage();
      router.push("/");
    }
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
