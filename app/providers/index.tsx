"use client";

import { ThemeProvider } from "next-themes";
import { GoogleTagManager } from "@next/third-parties/google";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleTagManager gtmId={"GTM-PFTVZ5DZ"} />

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
