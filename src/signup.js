import React, {useState} from 'react'
import './App.css';
import axios from "axios"
import {useNavigate } from 'react-router-dom';


function Signup(){

const history=useNavigate();
const [username,setUsername]=useState('')
const [pass,setPass]=useState('')
const [cpass,setCPass]=useState('')

async function submit(e){
e.preventDefault(e)
try{
  await axios.post("http://localhost:3001/register",{
    username,pass,cpass
  }).then(res=>{
if(res.data==="exist")
{
  alert("User already exists")
}
if(cpass !== pass)
{
  alert("passwords didn't match")
  history("/signup")
}
else if(res.data==="notexist")
{
  history("/")
}

}).catch(e=>{
  alert("wrong details")
  console.log(e);
})

}
//   .then(res=>{
//     // if(res.data==="exist")
//     // {
//     //   alert("user exits already")
//     // }   
//     if(res.data==="exist"){
//       alert("user exits already")
//     } 
//     else if(cpass!==pass)
//     {
//       alert("passwords not match")
//     }
//     else if(res.data==="notexist"){
//       history("/")
//     }
//   })
//   .catch(e=>{
//     if(!cpass || !pass || !username)
//       alert("fill details")
//       console.log(e);

// })


catch (error) 
{
  console.error(error);
}
}
return (
      <>
      <div className='arya'>
      <h1>
      Sign-Up Page
      </h1>
      </div>

      <div className='mom'>

        <div className='K'>
        <form className='formy'>
          <div className='m'>
          <input type='text' name='username' className='username' placeholder='username' onChange={(e)=>{setUsername(e.target.value)}} autoComplete="off"/>

          </div>
          <p>

          </p>
          <div className='m'>
          <input type='password' name='pass' className='pass' placeholder='password' onChange={(e)=>{setPass(e.target.value)}} autoComplete="off"/>

          </div>
          <p>

          </p>
          <div className='m'>
          <input type='password' name='cpass' className='pass' placeholder='confirm password' onChange={(e)=>{setCPass(e.target.value)}}  autoComplete="off"/>

          </div>
        </form>
        <p>
        </p>
        <div className='G'>
  
          <button type="sumbit" onClick={submit} disabled={!username || !cpass  || !pass}>
            Sign-In
          </button>
  
        </div>

        </div>
      </div>
      </>
    )
}

  export default Signup



  // const[user, setUser]=useState({
//   username:"",pass:"",cpass:""
// });
// let username,value,pass,cpass;
// const handl=(e)=>{
//   console.log(e) 
//   // const{username, value}=e.target;
//   username=e.target.name;
//   value=e.target.value;
//   setUser({...user,[username]:value});
// }
// const navigate = useNavigate();
// const handleC = async(e)=>{
//   e.preventDefault();
//   const user= {username, pass, cpass};
//   const res = await fetch("http://localhost:3001/register",{

//     method : "POST",
//     header:{ 
//       "Content-Type":"application/json",
//       "Accept":"application/json"
//     },
//     body:JSON.stringify({
//       username,pass,cpass
//     })
//   });
//   const data = await res.json();
//   if(res.status === (422) || !data)
//   {
//     window.alert("fail"); 
//     console.log("failed !");
//   }
//   if(cpass!==pass)
//   {
//     window.alert("fail"); 
//     console.log("failed !");
//   }
//   else{
//     window.alert("success !");
//     console.log("success !");
//   }
//   navigate("/");

// }