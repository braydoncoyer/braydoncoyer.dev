import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl;

  if (pathname == '/blog/how-i-define-mvp') {
    return NextResponse.redirect(
      '/blog/setting-yourself-up-for-success-how-i-define-mvp-(minimal-viable-product)'
    );
  }

  if (pathname == '/blog/the-kdb-html-tag') {
    return NextResponse.redirect('/blog/the-kbd-html-tag');
  }

  return NextResponse.next();
}
