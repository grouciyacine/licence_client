import React, { useState } from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {loginFailure,loginSuccess,loginStart} from '../../redux/user'
import {useNavigate} from 'react-router-dom'
function Login() {
    const [input,setInput]=useState({
        username:'',
        password:'',
    })
    const navigation=useNavigate()
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleClick=async(e)=>{
        e.preventDefault();
        dispatch(loginStart())
        try{
            await axios.post('http://127.0.0.1:8000/login/',input)
            .then((res)=>dispatch(loginSuccess(res.data)))
            .catch(alert('email or password wrong'))
            navigation('/')
        }catch(e){
        dispatch(loginFailure())
    }
    setInput("")
    }
  return (
    <div className='container'>
        <form className='form'>
            <h1>Log-in Now:</h1>
            <div className='user'>
                <h4>Username:</h4>
                <input type='text' placeholder='Please Enter Your Username' name='username' onChange={handleChange}/>
            </div>
            <div className='user'>
                <h4>Password:</h4>
                <input type='password' placeholder='Please Enter Your Password' name='password' onChange={handleChange}/>
            </div>
            
            <button onClick={handleClick}>Submit</button>
            <h6>
                Don't have an account? <Link to='/register' >Register</Link>
            </h6>
        </form>
    </div>
  )
}

export default Login