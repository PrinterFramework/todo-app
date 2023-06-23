import { NextRequest, NextResponse } from 'next/server'
import { getIronSession, createResponse } from 'iron-session'

export const password =
  process.env.SESSION_SECRET ||
  'ad41152b0c014282bafe879eb7e909295b291c31590384d2348156397d5ac5a8'

export interface SessionI {
  counter?: number
}

export function getSession(req: NextRequest, res: NextResponse) {
  return getIronSession<SessionI>(req, res, {
    password,
    cookieName: 'printer',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: process.env.COOKIE_AGE
        ? Number(process.env.COOKIE_AGE)
        : undefined
    }
  })
}

export { createResponse }
