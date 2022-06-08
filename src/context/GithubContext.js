import { createContext, useState, use } from "react";

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
	const [user, setUser] = useState([]);

	const fetchUsers = async () => {
		const res = await fetch(`${GITHUB_URL}/users`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		});
		const user = await res.json();
		setUser(user);
	};

	return (
		<GitHubContext.Provider value={{ user, fetchUsers }}>
			{children}
		</GitHubContext.Provider>
	);
};

export default GitHubContext;
