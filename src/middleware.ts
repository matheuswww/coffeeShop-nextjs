import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = false
  const signInUrl = new URL('/cadastrar', request.url)
  if (!token) {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.next()
    }
    return NextResponse.redirect(signInUrl)
  }
}

export const config = {
  matcher: ['/minhaconta/:path*']
}
