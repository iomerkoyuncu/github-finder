import React from "react";
import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import GithubContext from "../../context/GithubContext";
import RepoList from "../repos/RepoList";

import { Button } from "@mui/material";
import Spinner from "../../assets/spinner.gif";

function User() {
	const { getUser, user, loading, getUserRepos, repos } =
		useContext(GithubContext);
	const params = useParams();

	useEffect(() => {
		getUser(params.login);
		getUserRepos(params.login);
	}, []);

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
	} = user;

	if (loading) {
		return (
			<div className='w-100 mt-20'>
				<img
					width={120}
					className='text-center mx-auto'
					src={Spinner}
					alt='Loading'
				/>
			</div>
		);
	}

	return (
		<>
			<div className='m-3 text-center'>
				<Link to='/'>
					<Button variant='outlined' color='secondary'>
						BACK TO SEARCH
					</Button>
				</Link>
			</div>
			<div className='flex justify-center '>
				<div className='bg-zinc-800 p-5 m-3 rounded-lg'>
					<div className='flex flex-row p-2 text-white items-center'>
						<div className='basis-1/4'>
							<img
								className='w-100 h-auto mx-auto rounded-full shadow-lg border-2 border-zinc-700 shadow-lg'
								src={avatar_url}
								alt={name}
							/>
						</div>
						<div className='basis-3/4 p-5'>
							<div className='flex flex-row justify-between'>
								<div className='basis-1/2'>
									<h1 className='text-2xl font-bold '>{name}</h1>
									<p className='text-sm'>{login}</p>
									<p className='my-3'>{bio}</p>
								</div>
								<div className='basis-1/2 text-right'>
									<p>{location}</p>
									<p>{blog}</p>
								</div>
							</div>
							<div className='flex flex-row my-5'>
								<div className='basis-1/3 flex flex-row justify-between m-2 p-2 border-2 border-zinc-700 shadow-lg'>
									<p>Following</p>
									<p>{following}</p>
								</div>
								<div className='basis-1/3 flex flex-row justify-between m-2 p-2  border-2 border-zinc-700 shadow-lg'>
									<p>Followers</p>
									<p>{followers}</p>
								</div>
								<div className='basis-1/3 flex flex-row justify-between m-2 p-2  border-2 border-zinc-700 shadow-lg'>
									<p>Repositories</p>
									<p>{public_repos}</p>
								</div>
							</div>
						</div>
					</div>
					{repos.length > 0 && (
						<div>
							<RepoList repos={repos} />
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default User;
