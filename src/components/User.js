import React, { use } from 'react'
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';

function User() {
    const {id} = useParams(); 
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/adityas17')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        }) 
    }, []);
  return (
    <div>
      Github: {data.followers}
    </div>
  )
}

export default User
