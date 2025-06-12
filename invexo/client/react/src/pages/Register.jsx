import React from 'react'
import RegisterForm from '../components/Register/RegisterForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import image from '../assets/registerpage.svg'
const Register = () => {
  const Navigate = useNavigate()
  const handleRegister =async (formdata)=>{
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/register', formdata, {
        withCredentials: true
      });
    if(response.status===201){
      Navigate('/')
    }
      
    } catch (error) {
      alert('Please enter the correct formt')
      console.log(error);
    }
  }
  return (
    <>
          <RegisterForm onSubmit={handleRegister}/>
          
    </>
  )
}

export default Register
