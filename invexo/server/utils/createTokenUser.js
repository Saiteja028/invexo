const createTokenUser = (user)=>{

    return {firstName: user.firstName, userid: user._id}
};
export default createTokenUser