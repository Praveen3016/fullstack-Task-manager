import mongoose ,{Schema} from "mongoose";

const Userschema = new Schema({
    name:String,
    email:{
        type: String,
        required : [true, "email Requered"],
        unique: true ,

    },
    password : {
        type : String,
        required : [true,  "pasword requed"],
    },
    about : String,
    profileURL:String,
    // address:{
    //     street:string,
    //     city:String,

    // }
})

export const User = mongoose.models.users || mongoose.model("users",Userschema)   