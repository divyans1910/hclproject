import React from "react";
import Navbarcomp from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import EntryExit from "./components/entext";
import Login from "./components/Signup";

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
            <Route path="entext" element={<EntryExit/>} />
            
         </Routes>
        </div>
        </div>
    );
}

export default App;
