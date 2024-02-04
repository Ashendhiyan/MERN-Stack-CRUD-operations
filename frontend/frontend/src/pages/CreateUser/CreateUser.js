
import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate()


const clearText = () => {
    setName("");
    setAddress("");
    setAge("");
    setEmail("");
    setPhone("");
}

const addUser = (data) => {
    const payload = {
        name: data.name,
        address: data.address,
        age: data.age,
        phone: data.phone,
        email: data.email
    }
    Axios.post('http://localhost:3001/api/save', payload)
        .then(() => {
            navigate('/')
            clearText();
        })
        .catch(error => {
            console.error("Axios Error :", error);
        })
}



const deleteUser = (data) =>{
    Axios.delete('http://localhost:3001/api/delete', data)
    .then(() => {
        clearText();
    })
    .catch(error => {
        console.error("Axios Error :", error);
    })
}

  return (
    <div className='container'  style={{paddingTop:'2rem'}} >
      <div className="col">
                <h2>Create User</h2><br/>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="email" id='studentName' class="form-control" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="kamal" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Address</label>
                            <input type="email" id='studentAddress' class="form-control" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder="kandy" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" id='studentEmail' class="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone</label>
                            <input type="email" id='studentPhone' class="form-control" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="0769151600" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">age</label>
                            <input type="email" id='studentAge' class="form-control" value={age} onChange={(e) => { setAge(e.target.value) }} placeholder="25" />
                        </div>
                        <button type="button" class="btn btn-primary"  style={{marginRight: '1rem'}} onClick={()=>addUser({name,address,age,phone,email})} >Save Student</button>
                    </div>
                    </div>
    
  )
}
