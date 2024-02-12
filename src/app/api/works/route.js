import { NextResponse } from "next/server"
import { connectDb } from "@/helper/db";
import { Work } from "@/models/work";
import jwt from 'jsonwebtoken'

connectDb();
export async function GET(request)
{
    try{
        let data = [];
         data =await Work.find();

       const response = NextResponse.json(data);
       return response
    }
    catch(error)
    {
        return NextResponse.json({
            error : "error in works get method"
        })
    }
}


export async function POST(request)
{
   const {title , content, addedDate,status,userId} = await request.json()
  
   console.log(title , content, addedDate,status,userId)

   const authToken = request.cookies.get("authToken")?.value;
   const data = jwt.verify(authToken , process.env.JWT_KEY);
   console.log(data)

   try{
    const workforsave = Work({
        title ,
         content,
          addedDate,
          status,
          userId : data._id,
       })
      
    await workforsave.save();
 
    const respons = NextResponse.json(workforsave , {
        status : 201,
    });
    return respons
   }
   catch(error)
   {
    console.log(error)
    return NextResponse.json( {
        
        error : error,
    })
   }
}

