import { StatusCodes } from "http-status-codes";
import customError from "./customError.js";
class unAuthorized extends customError{
    constructor(message){
        super(message);
        this.statusCode=StatusCodes.UNAUTHORIZED;
    }
}
export default unAuthorized