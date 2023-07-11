import React, {useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import Footer from "./footer"
import ".//login.css"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/entext",{state:{id:email}})
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

    }


    return (
        <div className="login">
         <div className="containerlogin">
        <div class="card">
            <h2>Sign Up</h2>
            <form action="POST">
                <input id="username" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input id="password" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />
            </form>
            <div class="switch">Click here for the <Link to="/Employee">Login Page</Link></div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login