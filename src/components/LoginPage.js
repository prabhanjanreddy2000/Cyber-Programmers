import { useState } from 'react';
import Data from '../data/loginCredentials.json'
import pic from '../images/logoLoginPage.jpg'
import '../styles/LoginPage.css'
import { Navigate } from 'react-router-dom';

export default function LoginPage(){
    var [emailId,setEmailId]=useState("")
    var [password,setPassword]=useState("")
    var [data,setData]=useState(Data)

    var emailFunction=(e)=>{
        setEmailId(e.target.value)
    }
    var passwordFunction=(e)=>{
        setPassword(e.target.value)
    }
    function check()
    {
        var flag=false
        if(emailId!==""){
            data.filter((user)=>user.email.includes(emailId)).map((x)=>{
            flag=true
            if(flag){
                if(password===x.password){
                alert("Login Successful");
                }
                else
                alert("Unauthorized Access") 
            }
            return null
        })
    }
        if(!flag)
            alert("Email not found")
    }
    return(
        <>
        <div className='container-fluid py-lg-5 loginPage'>
        <form onSubmit={check}>
            <div className='row'>
                <div className='col-lg-12 text-center'><h1 className='head'>Welcome to Cyber Programmers</h1></div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <img src={pic} alt='login-page-logo' className='img-fluid d-block mx-auto my-3'/>
                </div>         
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <div class="mb-3">
                        <label for="email" class="form-label"><strong>Email</strong></label>
                        <input type="email" class="form-control" id="username" placeholder="Enter email id" onChange={emailFunction}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <div class="mb-3">
                        <label for="password" class="form-label"><strong>Password</strong></label>
                        <input type="password" class="form-control" id="password" placeholder="Enter password" onChange={passwordFunction}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                        <input type="submit" class="btn btn-outline-light my-3"/>
                </div>
            </div>
        </form>
        </div>
        </>
    );
}
