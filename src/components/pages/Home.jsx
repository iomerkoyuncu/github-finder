import React from "react";
import Search from "../users/Search";
import { useContext } from "react";
import GithubContext from "../../context/GithubContext";

function Home() {
	const { users } = useContext(GithubContext);

	if (users.length <= 0) {
		return (
			<h1 className='text-center text-white'>
				welcome to github finder, search for a user
			</h1>
		);
	} else {
		return (
			<div>
				<Search />
			</div>
		);
	}
}

export default Home;
