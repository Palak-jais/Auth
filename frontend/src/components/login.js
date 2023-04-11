import React, { useState } from 'react';
import axios from 'axios'
function Login(){
    const[user,setUser]=useState({
        email:'',
        password:''
    })

    
    const targetValue=(e)=>{
        const{name,value}=e.target;
        setUser({...user,[name]:value})
       // console.log(value)
        
    }
    const loginSubmit=async e=>{
        e.preventDefault()
        try{
           // await axios.post('/user/login',{...user})
             await axios.post("http://localhost:5000/user/login", {...user},
             )
             alert("sucessfully login");
            }             
        catch(err){
            alert(err.response.data.msg)
        }

    }
    return(

        <div className='login-parent'>
        <form onSubmit={loginSubmit}>
        <h2>Login</h2>
        <input type="email" name='email' value={user.email} placeholder='Enter your email here' required onChange={targetValue}/>
        <input type="text" name='password' value={user.password} placeholder='Enter your password here' onChange={targetValue}/>
        <div className='login-child1'>
            <button type='submit'>LOGIN</button>
            
            
        </div>
        </form>
          
        </div>
    )
}
export default Login;