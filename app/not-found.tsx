'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '@/context/userContext';
import Navbar from '@/components/navbar';

export default function NotFound() {
  const { theme } = useContext(UserContext);

  return (
    <React.Fragment>
      <Navbar />
      <div className={`relative w-full min-h-screen flex flex-col items-center justify-center ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} bgLost`}>

        <div className='absolute left-10 bottom-10 flex flex-col items-center justify-center text-2xl font-semibold backdrop-blur-sm text-black'>
          <h1 className='text-3xl mb-4'>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <p>Go back to the <Link href="/" className='font-bold transition-all hover:underline'>homepage</Link>.</p>
        </div>

      </div>
    </React.Fragment>
  );
}