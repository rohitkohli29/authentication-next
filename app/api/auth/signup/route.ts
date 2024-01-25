import { NextRequest, NextResponse } from "next/server";
import { connectMongodb } from '@/config/db';
import userModel from '@/models/user.model';
import {signJwtToken} from '@/lib/jwt'
export async function POST(request: NextRequest) {
    try {
        await connectMongodb();

        const body = await request.json();
        
        // Create user using userModel.create, which also saves the document
        const newUser = await userModel.create({
            username: body.username,
            email: body.email,
            password: body.password,
            confirmPassword: body.confirmPassword,
        });

        const {_id,email} = newUser;
         
        // sign the jwt token to user
        const token = await signJwtToken({_id,email});
 
        // Return a NextResponse instead of Response
        return NextResponse.json({
            message: "User saved successfully!",
            status: 200,
            token,
        });

    } catch (err) {
        console.error(err);

        return NextResponse.json({
            message: "Internal Server Error",
            status: 500
        });
    }
}
