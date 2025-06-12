import { StatusCodes } from "http-status-codes";
const errorHandlerMiddleware = (err,req,res,next)=>{
    // console.log(err);
       let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong'
       }
       if(err.name==='ValidationError'){
          customError.msg = Object.values(err.errors).map((item)=>item.message).join(',')
         customError.statusCode=400
       }
       if(err.name==='CastError'){
        customError.msg=`invalid data format of ${err.value}`;
        customError.statusCode=400;
       }
       if(err.code && err.statusCode===11000){
        customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`
        customError.statusCode = 404
       }

       return res.status(customError.statusCode).json({ msg: customError.msg });

}
export default errorHandlerMiddleware