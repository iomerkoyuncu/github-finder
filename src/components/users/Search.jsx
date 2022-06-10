import React from 'react'
import { useContext } from 'react';
import Spinner from "../../assets/spinner.gif";
import { Button } from '@mui/material';

import GithubContext from '../../context/GithubContext';

import Card from "../layout/Card";

function Search() {

  const {users, loading, clearUsers} = useContext(GithubContext);

  if(!loading){
    return (
      <div>
        {users.length > 0 && (
          <div className='text-center p-2'>
            <Button variant='outlined' color="secondary" onClick={clearUsers} >CLEAR</Button>
          </div>
        )}
          
        <div className="flex flex-wrap justify-center p-2">
          {users.map(users => (
            <div className='m-5'>
              <Card userData={users} />
            </div>
          ))}
          </div>
      </div>
    )
  }
  else{
    return (
      <div className='w-100 mt-20' >
        <img width={120} className="text-center mx-auto" src={Spinner} alt="Loading" />
      </div>
    )
  }

}

export default Search