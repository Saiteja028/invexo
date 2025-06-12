import jwt from "jsonwebtoken";

const createJWT = ({payload})=>{
    const token=jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    } );
    return token
}

const attachCookiesToResponse = ({res,user})=>{
    const token= createJWT({payload:user});
    const oneDay= 24*60*60*1000;
    res.cookie('token',token,{
        httpOnly:true,
        expires: new Date(Date.now()+oneDay),
        secure: process.env.NODE_ENV === 'production',
        signed:true,
    })
}

const isTokenValid = ({token})=>{
    // console.log(jwt.verify(token,process.env.JWT_SECRET));
    return jwt.verify(token,process.env.JWT_SECRET)
    
}

export {createJWT,attachCookiesToResponse,isTokenValid}