import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import User from "../pages/User";

function Main() {
  return (
    <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path="/user/:login" element={<User />}/>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </main>
  )
}

export default Main