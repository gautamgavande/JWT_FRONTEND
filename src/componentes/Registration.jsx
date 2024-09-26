import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Registration() {
  const navigate = useNavigate();

  return (
    <div  className='d-flex justify-content-md-center  loginPage p-3 rounded w-120 border loginForm'
    style={{position:'absolute', top:'50%',left:'50%',
    transform: 'translate(-50%, -50%)'}}>
       
      <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name </Form.Label>
              <Form.Control type="text" placeholder="Enter user id" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="name" name='name' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" name='password'  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Role</Form.Label>
              <Form.Control type="password" placeholder="role" name='password'  />
            </Form.Group>
            
            <Button variant="primary" type='submit'>
              Submit
            </Button>
            <Button variant="secondary"  onClick={() => navigate('/')}>Login</Button>
          </Form>
    </div>
  )
}

export default Registration