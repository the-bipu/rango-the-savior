"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { UserContext } from "@/context/userContext";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const { theme, setTheme } = React.useContext(UserContext);

  return (
    <Button
      variant={theme === 'light' ? 'default' : 'outline'}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full px-2.5"
    >
      {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </Button>
  );
}
