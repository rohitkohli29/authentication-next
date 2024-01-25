import { NextRequest } from "next/server";

export default async function GET(request : NextRequest){
    const body = await request.json();
    // check the user register or not 
    return Response.json({
        message : 'Welcome To Login Route',
        status : 200,
    })
}