import { NextResponse } from "next/server";
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";

connectDb();
// todelete
export async function  DELETE(request , {params})
{
    console.log(params.userid)
    const {userid} = params;

   await User.deleteOne({
        _id : userid
    })

  return NextResponse.json({
    mesage :" delete api start",
    status : 202
  },{status : 203});
}

// togetone
export async function  GET(request , {params})
{   
    let oneid = []
    console.log(params.userid)
    const {userid} = params;

 oneid  = await User.findById(userid).select("-password")

  return NextResponse.json(oneid,{status : 203});
}


//update
export async function  PUT(request , {params})
{   
    let oneid = []
    console.log(params.userid)
    const {userid} = params;

    const {name,password,about} = await request.json();

 const user  = await User.findById(userid)

 user.name = name;
 user.password = password;
 user.about = about;

const updateduser = await user.save();
  
  return NextResponse.json(updateduser);
}