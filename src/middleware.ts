import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행되고 있음!');
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어- 경로를 리다이렉트 함!');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

/*
  정규표현식
  *: zero or more

  +: one or more

  그러니깐
  /products/:path* path가 있거나(많거나) 없거나 둘 다 가능
  /products/:path+ path가 하나 또는 많거나

  고로 /produts/slug 다이나믹 경로에 해당하는 곳에서만 미들웨어 실행을 원할경우 아래와 같이 작성
*/
export const config = {
  matcher: '/products/:path*',
};
