import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";


connectDb();

export async function POST(request){
 
    let response =  NextResponse.json({
        message : "logged out",
        success : true
    })

     response.cookies.set("authToken","",{
        expiresIn : new Date(0),
    })
    // response += NextResponse.redirect(new URL('/login', request.url))
    return response;
}