import * as jose from 'jose'

const secret = new TextEncoder().encode(
    process.env.JWT_SECRET
)

const alg = 'HS256'


export const signJwtToken = async (payload : any) => {
    const jwt = await new jose.SignJWT({...payload})
        .setProtectedHeader({ alg })
        .setExpirationTime('2h')
        .sign(secret)

    return jwt;
}

export const verifyJwtToken = async (token : string) => {
    try{
        const payload = await jose.jwtVerify(token,secret);
        return payload;
    }catch(err){
        return null;
    }
}