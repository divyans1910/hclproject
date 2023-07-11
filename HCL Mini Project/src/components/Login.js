import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './/login.css'


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data ==="exist"){
                    history("/entext",{state:{id:email}})
                }
                else if(res.data ==="notexist"){
                    alert("Account does not  exist, please contact the HR")
                }
            })
            .catch(e=>{
                alert("Invalid, Please try again")
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
            <h2>Login</h2>
            <form action="POST">
                <input id="username" required type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input id="password" required type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />
            </form>
            <div class="switch">Don't have an account, Contact HR</div>
            </div>
            </div>
        </div>
    )
}

export default Login;