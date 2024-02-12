import { NextResponse } from "next/server"

import { Work } from "@/models/work";
import { connectDb } from "@/helper/db";

connectDb();
export async function GET(response , {params})
{
  const {workID} = params;
  console.log(params)

 const newfind = await Work.findById(workID)

return NextResponse.json(newfind,{status : 203});
}


export async function DELETE(response , {params})
{
  const {workID} = params;
  console.log(params)

  await Work.deleteOne({
    _id : workID
})

return NextResponse.json({
    mesage :" delete api start",
    status : 202
  },{status : 203});
}


export async function  PUT(request , {params})
{   
    let oneid = []
    const {workID} = params;

    const {title,content,status} = await request.json();

 const workone  = await Work.findById(workID)

 workone.title = title;
 workone.content = content;
 workone.addedDate = addedDate;
 workone.status = status;


const updateduser = await workone.save();
  
  return NextResponse.json(updateduser);
}

