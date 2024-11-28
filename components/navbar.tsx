import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useContext, useState } from "react";
import { UserContext } from "@/context/userContext";

export default function Navbar({ theme }: any) {

  const { language, setLanguage } = useContext(UserContext);

  const handleLanguageChange = (newLanguage: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLanguage);
    }
    setLanguage(newLanguage);
  };

  return (
    <div className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 bg-transparent md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/">
        <Image
          alt="logo"
          className="mb-2 cursor-pointer w-20"
          src="/images/rango-main.svg"
          height={100}
          width={170}
        />
      </Link>
      <div className="items-center hidden gap-2 md:flex">
        <ModeToggle />
        <Link href="https://github.com/the-bipu/rango-the-savior">
          <Button
            variant={theme === 'light' ? 'default' : 'outline'}
            className="items-center hidden gap-2 rounded-full w-fit md:flex h-9 px-5 min-w-max"
            size="lg"
          >
            <span>Github Repo</span>
            <span className="text-xl">
              <GitHubLogoIcon className="w-5 h-5" />
            </span>
          </Button>
        </Link>
        <Select value={language} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-[120px] h-9 text-base font-medium">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent className="w-[120px]">
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="french">French</SelectItem>
            <SelectItem value="spanish">Spanish</SelectItem>
            <SelectItem value="hindi">Hindi</SelectItem>
            <SelectItem value="bhojpuri">Bhojpuri</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="block p-3 md:hidden ">
        <ModeToggle />
      </div>
    </div>
  );
}
