import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = true
  const signInUrl = new URL('/', request.url)
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
