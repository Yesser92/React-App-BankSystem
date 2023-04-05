import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import{Link}from"react-router-dom";
function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm bg-dark text-white  '>


      
        <ul className='nav nav-tabs '>
        <Link >
            </Link>
            <Link to='/found' className='found'>
                <li className="nav-link text-white"><h5>Found-user</h5></li>
            </Link>
            
            <Link to='/' className='editacoount'>
                <li className="nav-link text-white"><h5>Edit Account</h5></li>
            </Link>
           
            <Link to='/transferComponent' className='transferComponent'>
                <li className="nav-link text-white"><h5>Transfert</h5></li>
            </Link>
            <Link >
                <li className="nav-link text-white"><h5>Login</h5></li>
            </Link>
            
            
        </ul>
    </nav>
  )
}

export default Navbar