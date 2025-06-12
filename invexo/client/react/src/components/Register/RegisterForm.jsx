import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './RegForm.css'
import image from '../../assets/registerpage.svg'

const RegisterForm = ({onSubmit}) => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const formdata = {firstName, lastName, email,password}
    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit(formdata);
    }

    
  return (
    <div className='homepage-desc'>
        <div>
            <h1> INVEXO</h1>
            <p> A smart way to monitor your portfolio across all brokers. Stay updated with real-time data.</p>
            <img src={image} alt="image" className='loginpage-icon' />
        </div>
      
          <div className='auth-card'>
          <form className='reg-form' onSubmit={handleSubmit}>
              <h2 >Register User</h2>
                <input type="text" placeholder='First Name'  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="text" placeholder='Last Name' value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}/>
                <input type="email" placeholder='Email'  value={email}
                  onChange={(e)=>setEmail(e.target.value)}/>
                <input type="Password" placeholder='Password'  value={password}
                  onChange={(e)=>setPassword(e.target.value)}/>
                <input type="Password" placeholder='Retype Password' 
                  />
                <div class="button-group">
                    <button type="submit" class="btn">Submit</button>
                    <a href="/" class="btn">Login</a>
                </div>
          </form>

          </div>
      </div>
  );
};

export default RegisterForm
