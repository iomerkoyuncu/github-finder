import React from 'react'
import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

import GithubContext from "../../context/GithubContext"

import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { Button } from '@mui/material'
import Spinner from '../../assets/spinner.gif'

function User() {
  const {getUser, user, loading} = useContext(GithubContext)
  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user
  
  if(loading) {
    return (
      <div className='w-100 mt-20' >
      <img width={120} className="text-center mx-auto" src={Spinner} alt="Loading" />
    </div>
    )
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col justify-center">
            <img className="rounded-full w-32 h-32 mx-auto" src={avatar_url} alt="User" />
            <h1 className="text-center text-2xl font-bold mt-2">{name}</h1>
            <h2 className="text-center text-lg font-bold mt-2">{login}</h2>
            <h3 className="text-center text-lg font-bold mt-2">{type}</h3>
            <h3 className="text-center text-lg font-bold mt-2">{location}</h3>
            <h3 className="text-center text-lg font-bold mt-2">{bio}</h3>
            <h3 className="text-center text-lg font-bold mt-2">{blog}</h3>
            <h3 className="text-center text-lg font-bold mt-2">{twitter_username}</h3>
            <h3 className="text-center text-lg font-bold mt-2">{hireable}</h3>

            <div className="flex flex-row justify-center">
              <div className="flex flex-col text-white">
                <h3 className="text-center text-lg font-bold mt-2">{followers}</h3>
                <h3 className="text-center text-lg font-bold mt-2">{following}</h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-center text-lg font-bold mt-2">{public_repos}</h3>
                <h3 className="text-center text-lg font-bold mt-2">{public_gists}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col justify-center">
            <h1 className="text-center text-2xl font-bold mt-2">Repositories</h1>
            <div className="flex flex-row justify-center">
              <div className="flex flex-col">
                <h3 className="text-center text-lg font-bold mt-2">{public_repos}</h3>
                <h3 className="text-center text-lg font-bold mt-2">{public_gists}</h3>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default User

/*
        <div className="mb-4 text-center">
          <Link to="/">
            <Button variant="outlined" color="secondary">BACK TO SEARCH</Button>
          </Link>
        </div>
*/