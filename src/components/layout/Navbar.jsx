import React from "react";
import {Link} from "react-router-dom";

import { theme } from "../theme/theme";
import { styled, alpha } from "@mui/material/styles";
import { Box, Typography, AppBar, Toolbar, Stack } from "@mui/material";
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

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

export default function Navbar() {
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
			<Link to="/" ><GitHubIcon /></Link>
				<Search sx={{display: { xs: "none", sm: "block"}}} >
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder='Search…'
						inputProps={{ "aria-label": "search" }}
						onChange={(e) => console.log(e.target.value)}
					/>
				</Search>
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
