import { connectDb } from "@/helper/db";

import mongoose, { Schema } from "mongoose";

const Workschama  = new Schema({
    title :{
        type : String ,
        required : true
    },
    content : {
        type : String ,
        required : true,
    },
    addedDate :{
        type : Date,
        required : true,
        default : Date.now(),
    },
    status :{
        type : String,
        enum : ["Pending" , "Completed"],
        default : "Pending",
    },
    userId :{
        type : mongoose.ObjectId,
        required : true,
    },
})

export const Work = mongoose.models.works || mongoose.model("works" , Workschama);