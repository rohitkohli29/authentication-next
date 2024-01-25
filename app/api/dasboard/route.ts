import { NextRequest, NextResponse } from "next/server";
import userModel from '@/models/user.model';
import {verifyJwtToken} from '@/lib/jwt'

export async function GET(request: NextRequest) {
    const auth = request.headers.get('authorization');
    console.log('Request :- ',request.headers);
    
    const token = auth?.split("Bearer")[1];

    if(!token){
        return NextResponse.json({message : 'UnAuthorized user', status : 402});
    }

    try{
        const payload = await verifyJwtToken(token);

        if(!payload){
            return NextResponse.json({message : 'Token Expired', status : 402});
        }

        return NextResponse.json({message : 'I am here',status : 200});
    }catch(error){
        console.log(error);
    }
    return NextResponse.json({message : 'successfully...',status : 200});
}