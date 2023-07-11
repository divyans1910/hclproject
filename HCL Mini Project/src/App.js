import React from "react";
import Navbarcomp from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import EntryExit from "./components/entext";
import Login from "./components/Signup";
import Entrydetails from "./components/entrydetails";
import Exitdetails from "./components/exitdetails";
import Buttons from "./components/buttons";
import Slotno from "./components/slotno";
import EntryExitNew from "./components/entextnew";
import Success from "./components/success";
import Bill from "./components/bill";
import Billc from "./components/billc";
import Buttonsent from "./components/buttonsent";


function App(){
    return(
        <div>
        <Navbarcomp />
        <div className="container">
         <Routes>
            <Route index element={<Home />}/>
            <Route path="/Home" element={<Home/>} /> 
            <Route exact path="/Employee" element={<Employee/>}/>
            <Route path="/signup" element={<Login/>} /> 
            <Route path="entrydetails" element={<Entrydetails/>}/>
            <Route path="exitdetails" element={<Exitdetails/>}/>
            <Route path="buttons" element={<Buttons/>}/>
            <Route path="slotno" element={<Slotno/>}/>
            <Route path="entextnew" element={<EntryExitNew/>} />
            <Route path="entext" element={<EntryExit/>} />
            <Route path="success" element={<Success/>}/>
            <Route path="bill" element={<Bill/>}/>
            <Route path="billc" element={<Billc/>}/>
            <Route path="buttonsent" element={<Buttonsent/>}/>
         </Routes>
        </div>
        </div>
    );
}

export default App;
