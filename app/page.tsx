'use client';

import React from "react";
import { useContext } from "react";

import { UserContext } from "@/context/userContext";
import Dropzone from "@/components/dropzone";
import Navbar from "@/components/navbar";

export default function Home() {
  const { theme } = useContext(UserContext);

  return (
    <React.Fragment>
      <Navbar theme={theme} />

      <div className={`w-full min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-white text-[#1a1a1a]' : 'bg-[#1a1a1a] text-white'}`}>
        <div className={`md:w-8/12 w-11/12 pb-8 space-y-1 pt-32`}>

          <div className="space-y-6 pb-8">
            <h1 className="text-3xl font-bold text-center md:text-5xl uppercase">
              Rango - The Savior is here;
            </h1>
            <p className="w-full text-center text-base">
              Hey, It's me Rango - the chameleon and i also do a part time job, and it's not of a file convertor, it is of....... aaaaaaaaa..... it something like..... .yaah it's a file convertor; but it's not because i'm a chameleon; now that's a very heavy intro, get back to your work now;
            </p>
          </div>
          <Dropzone />
        </div>
      </div>
    </React.Fragment>
  );
}
