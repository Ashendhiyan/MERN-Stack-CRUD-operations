import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setStudents(response.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error :", error);
            })
    }

    const handleDelete = (id) =>{
        Axios.delete("http://localhost:3001/api/delete/"+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="container" style={{paddingTop:'10rem'}} >
                <div className="row">
                    <div className="col">
                        <Link to="/create" className='btn btn-success'>Add+</Link>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope='col'>Action</th>

                                </tr>
                            </thead>
                            <tbody id='Table'>
                                {
                                    students.map((student) => {
                                        return (
                                            <tr>
                                                <td>{student.name}</td>
                                                <td>{student.address}</td>
                                                <td>{student.age}</td>
                                                <td>{student.phone}</td>
                                                <td>{student.email}</td>
                                                <td>
                                                <Link to={`/update/${student._id}`} state={student} className='btn btn-success'>Update</Link>
                                                <button type="button" class="btn btn-danger" 
                                                onClick={(e) => handleDelete(student._id)}
                                                >Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
