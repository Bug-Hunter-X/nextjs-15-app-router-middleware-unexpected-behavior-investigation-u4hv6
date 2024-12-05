```javascript
// pages/api/middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();
  res.headers.set('X-Custom-Header', 'custom-value');
  return res;
}

export const config = {
  matcher: ['/'] // or any other path you need to match
};
```