
import { isTokenValid } from '../utils/jwt.js'
import {unAuthenticated} from '../errors/index.js'

const authenticateUser = async (req, res, next) => {


    const token = req.signedCookies.token;
    
  if (!token) {
    throw new unAuthenticated('Authentication Invalid');
  }

  try {

    const { firstName, userid } = isTokenValid({ token });
    req.user = { firstName, userid };
    next();
  } catch (error) {
    throw new unAuthenticated('Authentication Invalid');
  }
};

export default authenticateUser


