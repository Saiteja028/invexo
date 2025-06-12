import { useContext, useState } from "react";
import LoginContext from "./LoginContext";

const LoginProvider = ({children})=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <LoginContext.Provider value = {{email, setEmail,password, setPassword}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider
