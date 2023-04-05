import React from 'react';
import { BrowserRouter,Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home.js';
import Create from "./components/Create.js"
import Update from './components/Update.js';
import Read from './components/Read.js';
import TransferComponent from './components/TransferComponent.js';
import Navbar from './components/Navbar.js';
import Found from './components/Found';
const App = () => {

  return (
    <BrowserRouter>
     <Navbar />
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/read/:id' element={<Read />}></Route>
        <Route path='/transferComponent' element={<TransferComponent />}></Route>
        <Route path='/found' element={<Found />}></Route>

    </Routes>
</BrowserRouter>



  )
}


export default App;
