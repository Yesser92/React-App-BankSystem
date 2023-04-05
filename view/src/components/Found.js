import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
function Found() {
     const [searchBalance, setsearchBalance] = useState("")
     const [apiData, setApiData] = useState([])

     useEffect(() => {
        axios.get('http://127.0.0.1:3000/api/users').then((getData) => { setApiData(getData.data) })
    },[])


    return (
        <div className='container'>

            <input
             
                type="text"
                placeholder='Search by name ' className='form-control border border-danger '
                style={{ marginTop: 50, marginBottom: 20, width: "20%" }}
                onChange={(e) => {
                    setsearchBalance(e.target.value)
                }} />
                 <br>
        </br>
        <br>
        </br>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData.filter(data=>{
                        if(data.name.toLocaleLowerCase().includes(searchBalance.toLocaleLowerCase())){
                            return data
                        }
                    }).map(m => (
                        <tr key={m.id}>
                            <td>{m.id}</td>
                            <td>{m.name}</td>
                            <td>{m.balance}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Found