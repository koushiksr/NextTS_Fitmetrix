'use client';
import { LogIn, LogOut } from 'lucide-react';
import { signIn, signOut } from 'next-auth/react';
import React from 'react';

export const SignInButton = () => {
  return (
    <button type="submit" onClick={() => signIn('google')}>
      <LogIn size={24} />
    </button>
  );
};

export const SignOutButton = () => {
  return (
    <div className="flex items-center gap-3 hover:bg-gray-700 p-3 w-5 cursor-pointer">
      <button type="submit" onClick={() => signOut()}>
        <div className="flex items-center gap-3">
          <LogOut size={24} />
          <span className="group-hover:block hidden">Signout</span>
        </div>
      </button>
    </div>
  );
};
