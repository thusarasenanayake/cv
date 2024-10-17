"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>...</>;

  return (
    <div className="cursor-pointer hover:text-blue-500">
      {resolvedTheme === "dark" && <FiSun onClick={() => setTheme("light")} />}
      {resolvedTheme === "light" && <FiMoon onClick={() => setTheme("dark")} />}
    </div>
  );
}
