'use client';

import React, { useEffect, useState } from "react";
import { useContext } from "react";

import { UserContext } from "@/context/userContext";
import Dropzone from "@/components/dropzone";
import Navbar from "@/components/navbar";

import lang from '@/locales/lang.json';

type LanguageKeys = keyof typeof lang;

export default function Home() {
  const { theme, language: contextLanguage, setLanguage } = useContext(UserContext);

  const [resolvedLanguage, setResolvedLanguage] = useState<LanguageKeys>("english");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as LanguageKeys;
    if (storedLanguage && lang[storedLanguage]) {
      setResolvedLanguage(storedLanguage);
      setLanguage(storedLanguage);
    } else {
      setResolvedLanguage(contextLanguage || "english");
    }
  }, [contextLanguage, setLanguage]);

  const content = lang[resolvedLanguage] || lang.english;

  return (
    <React.Fragment>
      <Navbar theme={theme} />

      <div className={`w-full min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-white text-[#1a1a1a]' : 'bg-[#1a1a1a] text-white'}`}>
        <div className={`md:w-8/12 w-11/12 pb-8 space-y-1 pt-28`}>

          <div className="space-y-6 pb-8">
            <h1 className="text-3xl font-bold text-center md:text-5xl uppercase">
              {content.header}
            </h1>
            <p className="w-full text-center text-base">
              {content.body}
            </p>
          </div>
          <Dropzone />
        </div>
      </div>
    </React.Fragment>
  );
}
