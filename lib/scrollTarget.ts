const SCROLL_TARGET_KEY = "appointflow-scroll-target";

export function setPendingScrollTarget(id: string): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SCROLL_TARGET_KEY, id);
}

export function consumePendingScrollTarget(): string | null {
  if (typeof window === "undefined") return null;
  const id = sessionStorage.getItem(SCROLL_TARGET_KEY);
  sessionStorage.removeItem(SCROLL_TARGET_KEY);
  return id;
}
