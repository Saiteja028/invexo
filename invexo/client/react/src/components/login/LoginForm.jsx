import React, {useContext, useState} from "react";
import './loginForm.css'

import image from '../../assets/registerpage.svg'
import LoginContext from "../../contextapi/loginpage/LoginContext";
const LoginForm = ({onSubmit}) =>{
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const {email, setEmail} = useContext(LoginContext)
    const {password, setPassword} = useContext(LoginContext)

    const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit({ email, password });
    } else {
      console.error('onSubmit is not a function:', onSubmit);
    }
    setEmail('')
    setPassword('')
    
  };

    return (
        <>
        <div className="homepage-desc">
            <div>
            <h1> INVEXO</h1>
            <p> A smart way to monitor your portfolio across all brokers. Stay updated with real-time data.</p>
            <img src={image} alt="image" className='loginpage-icon' />

            </div>

                <form className="auth-card" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <input type="email"
                            placeholder="Email"
                            value={email}                                      
                            onChange={(e)=>setEmail(e.target.value)}
                            required    
                            />
                    <input type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)} 
                            required
                    />
                    <div className="button-group">

                    <button type="submit" className="btn">Login</button>
                    <a href="/register" className="btn">Register</a>
                    </div>
                </form>
        </div>
        </>
    );
};
export default LoginForm