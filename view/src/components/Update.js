import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



function Update() {

    const {id} = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        name: '',
        email: ''
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/users/'+id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/users/'+id , inputData)
        .then(res => {
            alert("Data Updated Successfully!")
            navigate('/')
        })
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-dark text-white p-5'>
            <form className='bg-dark ' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input type="number" disabled name='id' className='form-control' value={inputData.id}
                    />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' value={inputData.name}
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
               <br />
                <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update