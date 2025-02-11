import React from 'react';
import Link from 'next/link';
const UnauthorizedPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Unauthorized Access</h1>
        <p className="mt-4 text-lg text-gray-700">You do not have permission to view this page.</p>
        <Link href="/" className="mt-6 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
