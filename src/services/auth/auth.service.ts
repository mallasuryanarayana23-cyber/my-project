import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'skillmap_dev_secret_keys');

export interface UserPayload {
  userId: string;
  phoneNumber: string;
  role: 'WORKER' | 'EMPLOYER' | 'ADMIN';
}

export const AuthService = {
  async signToken(payload: UserPayload): Promise<string> {
    return new SignJWT({ ...payload })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(JWT_SECRET);
  },

  async verifyToken(token: string): Promise<UserPayload | null> {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      return payload as unknown as UserPayload;
    } catch {
      return null;
    }
  },

  async getSession(): Promise<UserPayload | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get('skillmap_token')?.value;
    if (!token) return null;
    return this.verifyToken(token);
  },

  async setSession(payload: UserPayload) {
    const token = await this.signToken(payload);
    const cookieStore = await cookies();
    cookieStore.set('skillmap_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });
  }
};
