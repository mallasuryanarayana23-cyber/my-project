import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'skillmap_dev_secret_keys');

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('skillmap_token')?.value;

  // Define Protected Routes & Roles
  const isWorkerRoute = pathname.startsWith('/worker');
  const isEmployerRoute = pathname.startsWith('/employer') || pathname.startsWith('/find-workers');
  const isAdminRoute = pathname.startsWith('/admin');

  // Skip middleware for public routes, assets, and auth
  if (pathname.startsWith('/_next') || pathname.startsWith('/api/auth') || pathname === '/login' || pathname === '/') {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    const role = payload.role as string;

    // RBAC: Role-Based Access Control
    if (isAdminRoute && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/', request.url));
    }

    if (isWorkerRoute && role !== 'WORKER' && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/', request.url));
    }

    if (isEmployerRoute && role !== 'EMPLOYER' && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    '/worker/:path*',
    '/employer/:path*',
    '/admin/:path*',
    '/find-workers/:path*',
  ],
};
