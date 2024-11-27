"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { UserContext } from "@/context/userContext";

export function ModeToggle() {
  const { theme, setTheme } = React.useContext(UserContext);

  return (
    <Button
      variant={theme === 'light' ? 'default' : 'outline'}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full px-2"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
