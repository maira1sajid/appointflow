"use client";

import { useEffect } from "react";
import { consumePendingScrollTarget } from "@/lib/scrollTarget";

export default function CleanHashOnLoad() {
  useEffect(() => {
    const pendingId = consumePendingScrollTarget();
    if (pendingId) {
      document.getElementById(pendingId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return null;
}
