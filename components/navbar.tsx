import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { ModeToggle } from "./mode-toggle";

export default function Navbar({ theme }: any) {
  return (
    <div className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-transparent md:px-8 lg:px-12 xl:px-16 2xl:px-24">
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
        <Link href="https://github.com/the-bipu/">
          <Button
            variant={theme === 'light' ? 'default' : 'outline'}
            className="items-center hidden gap-2 rounded-full w-fit md:flex h-9 px-5"
            size="lg"
          >
            <span>Github Repo</span>
            <span className="text-xl">
              <BsGithub />
            </span>
          </Button>
        </Link>
      </div>
      <div className="block p-3 md:hidden ">
        <ModeToggle />
      </div>
    </div>
  );
}
