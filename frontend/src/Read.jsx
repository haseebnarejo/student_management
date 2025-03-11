import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
    const { id } = useParams();
    const [student, setStudent] = useState([])
    
    

    useEffect(() => {
        axios.get('http://localhost:8081/read/' + id)
            .then(res => {
                console.log(res)
                setStudent(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                    <h2>Student Detail</h2>
                    <h2>{student[0].id}</h2>
                    <h2>{student[0].name}</h2>
                    <h2>{student[0].email}</h2>
                    <Link to='/' className="btn btn-primary me-2">Back</Link>
                    <button className="btn btn-info">Edit</button>
            </div>
        </div>
    )
}

export default Read