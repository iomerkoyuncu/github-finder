import React from "react";
import { useState,useContext } from "react";
import {Link} from "react-router-dom";

import GitHubContext from "../../context/GithubContext";

import { theme } from "../theme/theme";
import { styled, alpha } from "@mui/material/styles";
import { Box, Typography, AppBar, Toolbar, Stack,Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";

const StyledToolbar = styled(Toolbar)({
	backgroundColor: theme.palette.primary.dark,
	color: theme.palette.primary.contrastText,
	display: "flex",
	justifyContent: "space-evenly",
	alignItems: "center",
});

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 1),
		// vertical padding + font size from searchIcon

		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "20ch",
		},
	},
}));

export default function Navbar() {

	const {users, searchUsers} = useContext(GitHubContext);
	
	const [text, setText] = useState("");

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if(text){
			searchUsers(text);
		}else{
			alert("Please enter a username");
		}

		setText("");
	};


	return (
		<AppBar position='sticky'>
			<StyledToolbar>
			<Link to="/" ><GitHubIcon /></Link>
					<Stack>
				<Search sx={{display: { xs: "none", sm: "block"}}} >

					<InputBase
						placeholder='Search…'
						inputProps={{ "aria-label": "search" }}
						value={text}
						onChange={handleChange}
						sx={{
							px:"10px",
							color:"inherit"
						}}
						/>
						<Button onClick={handleSubmit} color="inherit">
							<SearchIcon />
						</Button>
				</Search>
					</Stack>
				<Stack direction='row' spacing={5} justifyContent="center" alignItems="center">
					<Typography variant='h6' sx={{fontSize: "16px"}} color='inherit'>
						<Link to="/">Home</Link>
					</Typography>
					<Typography sx={{fontSize: "16px"}} variant='h6' color='inherit'>
						<Link to="/about" >About</Link>
					</Typography>
				</Stack>
			</StyledToolbar>
		</AppBar>
	);
}
