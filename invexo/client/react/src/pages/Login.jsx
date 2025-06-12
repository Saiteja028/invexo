import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import LoginForm from '../components/login/LoginForm'
import axios from 'axios';
import image from '../assets/registerpage.svg'
const Loginpage = () => {
  const navigate = useNavigate();
  const handleLogin = async ({ email, password }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
        email,password,
      },{
        withCredentials: true
      })
        
      if(response.status===200){
        navigate('/stocks')
      }
    } catch (error) {
      alert('login failed:'+ (error.response?.data?.message || error.message))
    }
  };

  return (
    <div>

      <LoginForm onSubmit={handleLogin} /> 
    </div>
  );
};


export default Loginpage
