import { auth } from '@/app/auth';
import { NextResponse } from 'next/server';

export async function middleware(req: Request) {
  const session: any = await auth();
  // console.log('token', session);

  // If the user is not authenticated, redirect to the sign-in page
  if (!session) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }

  // Extract user's role from the session
  const userRole = session?.user?.role || 'guest';

  // Define protected routes and allowed roles
  const rolePermissions: Record<string, string[]> = {
    '/admin': ['admin'],
    '/student': ['student'],
    '/adult': ['adult'],
    '/assessor': ['assessor', 'admin'],
    '/school': ['school', 'admin'],
  };

  // Check if the current path is restricted
  for (const path in rolePermissions) {
    if (req.nextUrl.pathname.startsWith(path)) {
      if (!rolePermissions[path].includes(userRole)) {
        return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
      }
    }
  }

  return NextResponse.next();
}

// Apply middleware to protect multiple role-based routes
export const config = {
  matcher: ['/', '/admin/:path*', '/student/:path*', '/adult/:path*', '/assessor/:path*', '/school/:path*'],
};
