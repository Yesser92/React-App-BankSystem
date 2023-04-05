import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link,useNavigate  } from 'react-router-dom';
function Home() {
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()



    useEffect(() => {
        axios.get("http://localhost:3000/users").then(res => setUserData(res.data)).catch(err => console.log(err))


    }, [])
    return (
        <div>
            <div className='container mt-5'>
            <Link to="/create" className='btn btn btn-dark my-3'>Add-User +</Link>

                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Balance</th>
                            <th>       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((d, i) => (

                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.balance}</td>
                                <td>
                                    <Link className='text-decoration-none btn btn-sm btn btn-info ' to={`/update/${d.id}`}>Update</Link>
                                    &nbsp;
                                    <button className='text-decoration-none btn btn-sm btn-danger' onClick={e => handleDelete(d.id)}>Delete</button>
                                    &nbsp;
                                    
                                    <Link className='text-decoration-none btn btn-sm btn btn-success ' to={`/read/${d.id}`}>Read</Link>


                                </td>


                            </tr>

                        )
                        
                        
                        
                        
                        
                        
                        
                        
                        )}



                    </tbody>
                </table>
            </div>
        </div>
    )

    function handleDelete(id) {
        const confirm = window.confirm("Do you like to Delete?");
        if(confirm) {
            axios.delete('http://localhost:3000/users/'+id)
            .then(res => {
                alert("Record Deleted");
                navigate('/')
            })
        }
      }
}

export default Home