import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Read = () => {
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8081/read/' + id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])
  return (
    <div>Read</div>
  )
}

export default Read