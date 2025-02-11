'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

export default function LoginForm() {
  const { data: session } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await signIn('credentials', { email, password, redirect: false });
  };

  return (
    <div className="p-4 border rounded-md">
      {session ? (
        <>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()} className="p-2 bg-red-500 text-white rounded">
            Logout
          </button>
        </>
      ) : (
        <>
          <input className="border p-2 mb-2" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input className="border p-2 mb-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin} className="p-2 bg-blue-500 text-white rounded">
            Login
          </button>
          <button onClick={() => signIn('google')} className="p-2 bg-green-500 text-white rounded">
            Login with Google
          </button>
        </>
      )}
    </div>
  );
}
