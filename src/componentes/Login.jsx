import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Login() {
  
  const[data,setData] =  useState({
    email:'',
    password:''
  })
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
  const navigate = useNavigate();
  
  const handleSubmit= async (e)=>{
    
    e.preventDefault()
    console.log(data)
    let response= await axios.post("http://localhost:5000/userlogin",data,{ withCredentials: true })
    console.log(response.data.data.role==="hr")
  //   if(response.data.data.role==="hr"){
  //        navigate('/hr')
  //   }
  //   else if(response.data.data.role==="admin"){
  //     navigate('/admin')
  //   }
  //   else if(response.data.data.role==="student"){
  //     navigate('/student')
  //   }
  //   else if(response.data.data.role==="teacher"){
  //     navigate('/teacher')
  //   }
 }
  

  return (
    <div className='d-flex justify-content-md-center loginPage'
    style={{position:'absolute', top:'50%',left:'50%', transform: 'translate(-50%, -50%)'}}>
    <div className='p-3 rounded w-120 border loginForm'>
      <h2>Login page</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email id</Form.Label>
          <Form.Control type="text" placeholder="Enter id" name='email' onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' onChange={handleInput}/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  </div>
  )
}

export default Login