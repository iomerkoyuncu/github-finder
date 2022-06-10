import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
	palette: {
		background: {
			default: "#263238",
		},
		primary: {
			main: "#1a2327",
		},
		secondary: {
			main: "#fff",
		},
	},
});
