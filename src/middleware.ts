import { get } from '@vercel/edge-config';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const slug = req.nextUrl.pathname.split('/').pop();
  if (!slug) {
    return;
  }
  const redirect = await get<string>(slug);
  if (!redirect) {
    return;
  }
  return NextResponse.redirect(redirect);
};
