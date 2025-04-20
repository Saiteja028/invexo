import { StatusCodes } from "http-status-codes";
import customError from "./customError.js";
class unAuthenticated extends customError{
    constructor(message){
        super(message)
        this.StatusCodes=StatusCodes.UNAUTHORIZED;
    }
}
export default unAuthenticated