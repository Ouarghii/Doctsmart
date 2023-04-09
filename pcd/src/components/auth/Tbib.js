import React, { useState } from 'react';
import axios from 'axios';
import './tbib.css';
import log from '../../assets/log.svg'
import reg from '../../assets/register.svg'
import { message, Form, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom';

function Tbib() {

  const navigate = useHistory()
  const [isSignUp, setIsSignUp] = useState(false);
  const [passShow, setPassShow] = useState(false)

  const handleSignInClick = () => {
    setIsSignUp(false);
  }

  const handleSignUpClick = () => {
    setIsSignUp(true);
  }

  const onFinish = async (values) => {
    try {
      const res = await axios.post('/docregister', values)
      if (res.data.success) {
        message.success('Register Successfully')
        setIsSignUp(false);
      } else {
        message.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      message.error('Something Went Wrong')
    }
  }
  const onFinishHandler=async(values)=>{
     try {
        const res=await axios.post('/doclogin',values)
        if(res.data.success){
          localStorage.setItem('token',res.data.token)
          message.success('Login Successfully')
          navigate.push('/doctorapp')
        }else{
          message.error(res.data.message)
        }
     } catch (error) {
        console.log(error)
        message.error('something went wrong')
     }
  }

  return (
    <div className={`container12 ${isSignUp ? 'sign-up-mode' : ''}`} >
      <div className="formss-container">
        <div className="signin-signup">
          <Form className="form sign-in-form" onFinish={onFinishHandler} T style={{background:'#232323',borderRadius:'10px'}}>
            <h2 className="title">Sign in</h2>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input prefix={<i className="fas fa-user" />} placeholder="your email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password prefix={<i className="fas fa-lock" />} placeholder="Password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="btinn solid">
              Login
            </Button>
          </Form>
          <Form className="form sign-up-form" onFinish={onFinish}style={{background:'#232323',marginLeft:'30px',borderRadius:'10px'}}>
            <h2 className="title">Sign up</h2>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input prefix={<i className="fas fa-user" />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input prefix={<i className="fas fa-envelope" />} placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password prefix={<i className="fas fa-lock" />} placeholder="Password" />
            </Form.Item>
            
        <Button type="primary" htmlType="submit" className="btinn">
          {isSignUp ? 'Sign up' : 'Login'}
        </Button>
        
      </Form>
    </div>
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3>New here ?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at leo ac nisi accumsan pulvinar.
        </p>
        <button className="btinn transparent" onClick={handleSignUpClick}>
          Sign up
        </button>
      </div>
      <img src={reg} className="image" alt="Register" />
    </div>
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us ?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at leo ac nisi accumsan pulvinar.
        </p>
        <button className="btinn transparent" onClick={handleSignInClick}>
          Sign in
        </button>
      </div>
      <img src={log} className="image" alt="Login" />
    </div>
  </div>
</div>
);
}

export default Tbib;

