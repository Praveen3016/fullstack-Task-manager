import { Work } from "@/models/work";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";

connectDb()
export async function GET(request , {params})
{
  try{
    const {userid} = params;

    const usertask = await Work.find({
        userId : userid
    })

    return NextResponse.json(usertask)
  }
  catch(error)
  {
    return NextResponse.json(error , {
        message : " error in users task "
    })
  }
}