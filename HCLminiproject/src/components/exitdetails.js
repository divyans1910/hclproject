import React, {  useState } from "react"
import axios from "axios"
import { useNavigate} from "react-router-dom"
import ".//login.css"


function Exitdetails() {

    const history=useNavigate();

    const [vehicleno,setVehicleno]=useState('')
    const [phoneno,setPhoneno]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/exitdetails",{
              vehicleno,phoneno
            })
            .then(res=>{
                if(res.data ==="exist"){
                    history("/buttons",{state:{id:vehicleno}})
                }
                else if(res.data ==="notexist"){
                    alert("Data doesn't exist")
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
        <div className="exitdetails">
        <div className="containerlogin">
        <div class="card">
            <h2>Exit Details</h2>
            <form action="POST">
                <input id="username" type="text" onChange={(e) => { setVehicleno(e.target.value) }} placeholder="Vehicle Number"  />
                <input id="password" type="number" onChange={(e) => { setPhoneno(e.target.value) }} placeholder="Phone Number" />
                <input type="submit" onClick={submit} /> 
            </form>
          
            </div>
            </div>
        </div>
    )
}

export default Exitdetails;