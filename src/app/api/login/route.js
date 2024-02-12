import { User } from "@/models/user";
import bcrypt from "bcryptjs/dist/bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";

connectDb();

export async function POST(request) {
    const { email, password } = await request.json();
  
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User not found");
        }

        const matched = bcrypt.compareSync(password, user.password);
        if (!matched) {
            throw new Error("Password does not match");
        }

        const token = jwt.sign({        
            _id: user._id,
            name: user.name
        }, process.env.JWT_KEY, {
            // expiresIn: "1d" // Token expires in 1 day
        });

        const response = NextResponse.json({
            message: "Login success",
            success: true,
            user : user.name,
        });

        // Set the JWT token as a cookie
        response.cookies.set("authToken", token, {
            expiresIn: "id", // Expires in 1 day (in seconds)
            httpOnly: true,
        });

        return response;
    } catch (error) {
        console.error("Error finding user:", error);
        return NextResponse.json({
            message: error.message,
            status: 400,
            success: false
        });
    }
}
