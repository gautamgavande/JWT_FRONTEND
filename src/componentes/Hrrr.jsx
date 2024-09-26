import React, { useEffect } from 'react'
import { useContext } from 'react'
import {CountContext} from '../index'
import {useNavigate} from 'react-router-dom'

function Hr() {
  const navigate = useNavigate();
  const data = useContext(CountContext)
  console.log(data)

  useEffect(()=>{
    if(data.role === "teacher" || data.role === "student"){
      navigate("/")
      // alert("it is not your role")
    }
  },[data,navigate])
  
  return (
    <div><h1>welcom in my group {data.name}</h1>
          <h2>your role is {data.role}</h2>
    </div>
  )
}

export default Hr