import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";

connectDb();
// VpjrOfIlrzOOvlny
// get request function


export async function GET(request)
{
  let users = [] ;
  try{ 
   users = await User.find();
  }
  catch(error){
    return NextResponse.json({
      message : "get method not working"
    })
  }
  console.log(users)
  return NextResponse.json(users)
}


// to send data to
export async function POST(request)
{  const {name,email, password ,about , profileURl} = await request.json();

console.log(request.headers.get('name'));


  const user = await User({
    name,
    email,
    password ,
    about ,
     profileURl
  })
 
  try{

    user.password = await bcrypt.hashSync(user.password , parseInt(process.env.BCRYPT_SALT))
    console.log(user)
    await user.save();
    const response = NextResponse.json(user,
      {
        status : 201,
      });
  
      return response;
  }catch(error){
    console.log(error)
    return NextResponse.json({
      message : " error in post reQuest",
      status : false,
    },{
      status : 500,
    })
  } 
}   


