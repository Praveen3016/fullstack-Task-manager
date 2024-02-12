import mongoose from "mongoose"
// import { User } from "@/models/user"
const config = {
    isconnected : 0,
}

export const connectDb = async () =>{

    if(connection.readyState){
        return
    }
    try
    {
const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
    dbName : "work_manager",
    connectTimeoutMS: 40000, // Set a higher timeout value
});

console.log("db conected...")
console.log("connect with",connection.host)
console.log(connection.readyState)
config.isconnected = connection.readyState
//testing

// const uuser = new User({
//     name:"test name",
//     email: "test@gmail.com",
//     password:"testpassword",
//     about:"this is about"
// })

// await uuser.save()
console.log("user created");

    }catch(error)
    {
        console.log("fail to database")
        console.log(error)

    }
}