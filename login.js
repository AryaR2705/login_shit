import React,{useState} from 'react'
import './App.css';
// import Home from './home';

import axios from "axios"
import {Route, Link, Routes, BrowserRouter, NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { stringify } from 'nodemon/lib/utils';

function Login(){
const history = useNavigate();

const [username, setUsername]=useState('');
const [pass, setPass]=useState('');

async function handle(e){
  e.preventDefault();
  try{
  
    await axios.post("http://localhost:3001/login1",{
      username,pass
  })
  .then(res=>{
      if(res.data==="exist"){
          history("/home")
      }
      else if(res.data==="notexist"){
          alert("user does not exists create a account")
          history("/")
      }
  })
  .catch(e=>{
      alert("wrong details")
      console.log(e);
  })

}
catch(e){
  console.log(e);

}








// const handle =async(e)=>{
//   e.preventDefault();
//   const res =await fetch('http://localhost:3001/login',{
//     method: "POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//       username,pass
//     })
//   })
//   const data = res.json();

//   if(res.status===400||!data)
//   {
//     window.alert("Invalid !")
//   }
//   else{
//     window.alert("login success !")
//     history("/home")
//   }
  
}
    return (
      <>
      <div className='arya'>
      <h1>
      Login Page
      </h1>
      </div>

      <div className='mom'>

        <div className='K'>
        <form className='formy'>
          <div className='m'>
          <input name='username' className='username' placeholder='username' onChange={(e)=>{setUsername(e.target.value)}} autoComplete="off"/>

          </div>
          <p>

          </p>
          <div className='m'>
          <input name='pass' className='pass' placeholder='password' onChange={(e)=>{setPass(e.target.value)}} autoComplete="off"/>

          </div>

        </form>
        <div className='nav'>
            <NavLink to='/signup'>
            Create Account?
            </NavLink>
            </div>

        <div className='G'>

            <button className="bitch" onClick={handle} disabled={!username || !pass}>Login</button>
        </div>

        </div>
      </div>
      </>
    )
  }


  export default Login