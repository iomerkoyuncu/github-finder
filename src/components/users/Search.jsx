import React from 'react'
import { useState, useEffect } from 'react'

import Card from "../layout/Card";

function Search() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    setUsers(users);
  }
  

  return (
    <div className="flex flex-wrap justify-center" >
      <div className='m-5'>
        <Card />
      </div>
      <div className='m-5'>
        <Card />
      </div>
      <div className='m-5'>
        <Card />
      </div>
      <div className='m-5'>
        <Card />
      </div>
      <div className='m-5'>
        <Card />
      </div>
      <div className='m-5'>
        <Card />
      </div>
    </div>
  )
}

export default Search