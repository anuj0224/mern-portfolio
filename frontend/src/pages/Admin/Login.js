import { message } from 'antd';
// import { response } from 'express';
import React, { useState } from 'react'
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Login() {
    const [user ,setUser] = useState({
        username :" ",
        password :" ",
    });
   const dispatch = useDispatch();
    const login = async()=>{
        try {
            dispatch(ShowLoading());
            const response = await axios.post('/api/portfolio/admin-login', user);
            dispatch(HideLoading());
            if(response.data.success){
                message.success(response.data.message);
                localStorage.setItem('token', response.data);
                window.location.href = '/admin';
            }else{
                message.error(response.data.message);
                dispatch(HideLoading());
            }
        } catch (error) {
           message.error(error.message)
        }
    }
  return (
    <div className='flex justify-center items-center h-screen' >
        <div className='w-96 flex gap-5 p-5 border-gray-500 border flex-col' >
            <h1 className='text-2xl' >Admin Login Page</h1> <hr/>
            <input type='text' value={user.username} onChange={(e)=>setUser({...user, username:e.target.value})} placeholder='Username' />
            <input type='password' value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})} placeholder='Password'/>
            <button className='bg-primary text-white p-2' onClick={login} >Login</button>
        </div>
    </div>
  )
}

export default Login;