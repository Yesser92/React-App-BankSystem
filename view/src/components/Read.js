import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

function Read() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [Data, setdata] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/users/'+id)
        .then(res => setdata(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
   
    <div className='container d-flex justify-content-center'>
       <form className='bg-dark ' ></form>
        
            <div className='container p-5   justify-content-center'>
            <p > ID-User:&nbsp;&nbsp;&nbsp;&nbsp; {Data.id}</p>
            <p> Name: &nbsp;&nbsp;&nbsp;&nbsp;{Data.name}</p>
            <p>Balance: &nbsp;&nbsp;&nbsp;&nbsp;{Data.balance}</p>
            <Link to="/"><button className='text-decoration-none btn btn-sm btn btn-success' >Back</button></Link>
            </div>
            <form/>
    </div>
    
  )
}

export default Read