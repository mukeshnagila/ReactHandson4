import React from "react";
import '../CSSpart/style.css';
import HomeUrl from "./HomeUrl";
import StudentsUrl from "./StudentsUrl";
import ContactUsUrl from "./ContactUsUrl";
import { Routes, Route, NavLink } from "react-router-dom";

function NavBar(){
    return(
        <>
            <div className="navbar">
                        <div className="navbar2">
                            <NavLink style={({isActive}) => ({color : isActive ? "lightgreen" : "aliceblue"})} className="Link" to="/">Home</NavLink>
                            <NavLink style={({isActive}) => ({color : isActive ? "lightgreen" : "aliceblue"})} className="Link" to="/StudentsUrl">Students</NavLink>
                            <NavLink style={({isActive}) => ({color : isActive ? "lightgreen" : "aliceblue"})} className="Link" to="/ContactUsUrl">Contact Us</NavLink>
                        </div>  
            </div>
                        <Routes>
                            <Route path="/" element={<HomeUrl/>} />
                            <Route path="/StudentsUrl" element={<StudentsUrl/>} />
                            <Route path="/ContactUsUrl" element={<ContactUsUrl/>} />
                        </Routes>
        </>
    )
}

export default NavBar;