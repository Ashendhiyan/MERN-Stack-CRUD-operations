import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getUsers/" + id)
      .then((result) => {
        console.log(result.data.response);
        setName(result.data.response.name);
        setAddress(result.data.response.address);
        setAge(result.data.response.age);
        setEmail(result.data.response.email);
        setPhone(result.data.response.phone);
      })
      .catch((err) => console.error(err));
  }, []);

  const clearText = () => {
    setName("");
    setAddress("");
    setAge("");
    setEmail("");
    setPhone("");
  };

  const updateUser = (data) => {
    const payload = {
      name: data.name,
      address: data.address,
      email: data.email,
      phone: data.phone,
      age: data.age,
    };
    Axios.put("http://localhost:3001/api/update/"+id, payload)
      .then(() => {
        navigate('/')
        clearText();
      })
      .catch((error) => {
        console.error("Axios Error :", error);
      });
  };

  return (
    <div className="container" style={{paddingTop:'2rem'}}>
      <div className="col">
        <h2>Update User</h2>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="email"
            id="studentName"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="kamal"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Address
          </label>
          <input
            type="email"
            id="studentAddress"
            className="form-control"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="kandy"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="studentEmail"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Phone
          </label>
          <input
            type="email"
            id="studentPhone"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="0769151600"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            age
          </label>
          <input
            type="email"
            id="studentAge"
            className="form-control"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder="25"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginRight: "1rem" }}
          onClick={() => updateUser({ name, address, age, phone, email })}
        >
          Update Student
        </button>
      </div>
    </div>
  );
}
