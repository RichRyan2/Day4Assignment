import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import NavigationBar from './Components/NavigationBar'

function Router() {
    return(
        <>
            <BrowserRouter>
            <NavigationBar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router