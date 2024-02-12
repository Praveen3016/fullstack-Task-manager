import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";

connectDb();
export async function GET(request)
{
   const authToken = request.cookies.get("authToken")?.value;

   const data = jwt.verify(authToken ,process.env.JWT_KEY);

   const user = await User.findById(data._id);

   return NextResponse.json(user)
}