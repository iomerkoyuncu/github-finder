import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import { GithubProvider } from "./context/GithubContext";

function App() {
	return (
		<GithubProvider>
			<Router>
				<div className='flex flex-col justify-between h-screen'>
					<Navbar />
					<Main />
					<Footer />
				</div>
			</Router>
		</GithubProvider>
	);
}

export default App;
