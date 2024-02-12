import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("middlewere executed")
    const authToken = request.cookies.get("authToken")?.value;
    console.log(authToken)

    if( request.nextUrl.pathname === '/api/login' || request.nextUrl.pathname === '/api/user')
    {
       return;
    }

    const loginusernotaccess = request.nextUrl.pathname === '/login' ||
     request.nextUrl.pathname == '/signup';

    

    if(loginusernotaccess)
    {
        if(authToken)
        {
            return NextResponse.redirect(new URL('/', request.url));
        }
       
    } else
    {
        if(request.nextUrl.pathname == '/api/works' || request.nextUrl.pathname == '/api/works/:path*')
        {
            return;
        }
        if( request.nextUrl.pathname == '/api/user/:path*')
        {
            return;
        }
        if(!authToken)
        {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/add-task' ,'/show-task','/', '/about','/login' ,'/signup' ,'/api/:path*']
}