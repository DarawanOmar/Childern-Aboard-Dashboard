"use client";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button size="icon" className="rounded-full" />;
  }
  return (
    <Button
      size="icon"
      variant={"outline"}
      effect={"ringHover"}
      className="rounded-full bg-white-background text-foreground border"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
