import React, { useState, useEffect } from "react";
import { Link,useNavigate  } from 'react-router-dom';

function TransferComponent() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:3000/users/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const senderName = event.target.senderName.value;
    const receiverName = event.target.receiverName.value;
    const amount = event.target.amount.value;
    amount: Number(amount)

    const sender = data.find((user) => user.name === senderName);
    const receiver = data.find((user) => user.name === receiverName);

    if (sender && receiver && sender.balance >= amount) {
      const now = Date.now();
      sender.transfers[receiverName] = sender.transfers[receiverName] || [];
    sender.transfers[receiverName].push(now);
    const recentTransfers = sender.transfers[receiverName].filter(
      (timestamp) => now - timestamp < 15000
    );
    if (recentTransfers.length > 2) {
      alert(
        "You cannot transfer to the same user more than two times within 15 seconds."
      );
      return;
    }
    if (amount > 500) {
      alert("You cannot transfer more than $500 in one transaction.");
      return;
    }

      sender.balance =  sender.balance - Number(amount)
      ;
      receiver.balance = (Number(receiver.balance)+Number(amount))
      ;
      setData([...data]);
    }
  };

  return (
    <div className="mx-auto col-10 col- col-lg-6" >
<br>
</br>
<br>
</br>

      <form className='w-50 border bg-dark  text-white p-5' onSubmit={handleSubmit}>
        <label>
          Sender's Name:
          <input type="text" name="senderName" required  className='form-control'/>
        </label>
        <br />
        <label>
          Receiver's Name:
          <input type="text" name="receiverName" required  className='form-control'/>
        </label>
        <br />
        <label>
          Amount:
          <input type="number" name="amount" required className='form-control'/>
        </label>
        <br />
        <br>
        </br>
       
        
        <button type="submit" className='text-decoration-none btn btn-sm btn btn-success'>Transfer</button>
      </form>
      <br>
        </br>
        <br>
        </br>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.id}</td>
              <td>{user.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransferComponent;