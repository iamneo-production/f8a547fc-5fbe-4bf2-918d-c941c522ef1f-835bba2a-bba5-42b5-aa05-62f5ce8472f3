
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Login.css';
import {Link} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import userSlice from '../Redux/userSlice';
import { login } from '../Redux/userSlice';
import Sidebar from '../Bar/Sidebar';



function Login() {
    
    const[error,seterror]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    
    const formHandler=(event)=>
    {
        event.preventDefault();
        
        //validation:
        if(username.length===0 || password.length===0)
        {
          seterror(true);
        }
       
        else if (username && password) {
          dispatch(login(username));
          navigate("/");
        }
      }
      
  
  return (
    <div>
    <Sidebar/>
    <div className='full_login'>
    
    <br/><br/>
    <div className='rectangle'></div>
    <div className='body1'>
    
    <form className='form_login' onSubmit={formHandler}>
    <h2>LOGIN</h2><br/>
    USERNAME:<input type="Name" value={username} placeholder="enter username" onChange={(e) => setUsername(e.target.value)}/><br/><br/>
    <div>
    {error && username.length===0?
      <label style={{color:'red'}}>Username is required</label>:""} 
      </div>
      PASSWORD:<input type="password" value={password} placeholder="enter password" onChange={(e) => setPassword(e.target.value)}/><br/>
      <div>
      {error && password.length===0?
        <label style={{color:'red'}}>Password is required</label>:""}<br/>
        </div>
        <br/>
        <button className="but1" >Login</button><br/><br/><br/>
        <h5>Doesn't have an account?</h5><br/>
        <p className='reg'><Link to="/signup"> Signup</Link></p>
        </form>
        </div>
    </div>
    </div>
    )
  }
  export default Login
  //<h6><Link href='/ForgetPassword'>FORGOT PASSWORD</Link></h6>
  //<Link href="/Description"><button class="login" >LOGIN</button></Link>
  //<div className='img1'>
  //<img src="https://e0.pxfuel.com/wallpapers/60/562/desktop-wallpaper-pastel-background-landscape-page-6-pastel-landscape-art.jpg" height="40%" width="100%"></img>
  //</div>