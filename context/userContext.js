'use client';

import { useRouter } from 'next/navigation';
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const router = useRouter();

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <UserContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};