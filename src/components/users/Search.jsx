import React from 'react'
import { useContext, useEffect } from 'react';

import GithubContext from '../../context/GithubContext';

import Card from "../layout/Card";

function Search() {

  const {user, fetchUsers} = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <div className="flex flex-wrap justify-center" >
        {user.map(user => (
           <div className='m-5'>
          <Card userData={user} />
          </div>
        ))}
    </div>
  )
}

export default Search