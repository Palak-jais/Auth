import React,{useState} from 'react';
import axios from 'axios'
function Register(){
    const[user,setUser]=useState({
        name:"",
        email:'',
        password:''
    })
    const targetValue=(e)=>{
        const{name,value}=e.target;
        setUser({...user,[name]:value})
          
    }
    const registerSubmit=async e=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/user/register",{...user})
            alert("Sucessfully registered");
        }
        catch(err){
            alert(err.response.data.msg)
        }
    }
    return <div className='register-parent'>
        <form onSubmit={registerSubmit}>
            <h2>Register</h2>
            <input type="text" name="name" required autoComplete='on'
            placeholder='Name'value={user.name} onChange={targetValue}/>

            <input type="email" name="email" required 
            placeholder='Email'value={user.email} onChange={targetValue}/>

           <input type="password" name="password" required autoComplete='on'
            placeholder='Password'value={user.password} onChange={targetValue}/>

            <div className='row'>
                <button type="submit">Register</button>
                
            
            </div>

        </form>
    </div>
}
export default Register;
