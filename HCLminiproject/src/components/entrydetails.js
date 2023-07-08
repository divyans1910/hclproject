import React, {useState } from "react"
import axios from "axios"
import { useNavigate} from "react-router-dom"
import ".//login.css"

function Entrydetails() {
    const history=useNavigate();

    const [vehicleno,setVehicleno]=useState('')
    const [phoneno,setPhoneno]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/entrydetails",{
                vehicleno,phoneno
            })
            .then(res=>{
                if(res.data ==="exist"){
                    history("/slotno")
                }
                else if(res.data ==="notexist"){
                    history("/slotno",{state:{id:vehicleno}})
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
        <div className="entrydetails">
        <div className="containerlogin">
        <div class="card">
            <h1>Entry Details</h1>

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

export default Entrydetails;