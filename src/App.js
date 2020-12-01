import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import "./App.css";

function MovieName(props) {
	return (
		<div className='scroll'>
			{props.movies.map((movie, index) => {
				return (
					<h3>
						<a href={`#${movie.movieName}`}>{movie.movieName}</a>
					</h3>
				);
			})}
		</div>
	);
}
function MovieDetail(props) {
	return (
		<div className='scroll'>
			{props.movies.map((movie, index) => {
				return (
					<Paper id={movie.movieName} key={index} className='paper'>
						<h1>{movie.movieName}</h1>
						<div>{movie.movieDetail}</div>
					</Paper>
				);
			})}
		</div>
	);
}
function App() {
	let data = [];
	for (let i = 0; i < 100; i++) {
		data = [
			...data,
			{
				movieName: `Movie_${i + 1}`,
				movieDetail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			},
		];
	}
	const [movies, setMovies] = useState(data);
	return (
		<div className='App'>
			<AppBar className='header' position={"relative"}>
				<Toolbar>
					<Typography variant='h6'> Scroll to Multiple </Typography>
				</Toolbar>
			</AppBar>
			{/* <Toolbar id='back-to-top-anchor' /> */}
			<Container className='mainCointainer'>
				<Grid container className='height-100' spacing={2}>
					<Grid xs={3} item className='height-100 leftContainer'>
						<MovieName movies={movies} />
					</Grid>
					<Grid
						xs={9}
						item
						className='height-100 padding-tb-10 rightContainer'>
						<MovieDetail movies={movies} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
