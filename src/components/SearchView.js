import Hero from "./hero";
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
	const movieUrl = `/movies/${movie.id}`;
	return (
		<div className="col-lg-4 col-md-3 col-2 my-4">
			<div className="card">
				{movie.poster_path ? (
					<img
						src={posterUrl}
						className="card-img-top"
						alt="movie poster"
					/>
				) : (
					<div
						className="card-img-top"
						style={{ height: "622px", backgroundColor: "black" }}>
						<h3
							className="text-center text-white text"
							style={{ paddingTop: "250px" }}>
							No image available
						</h3>
					</div>
				)}

				<div className="card-body">
					<h5 className="card-title">{movie.original_title}</h5>
					<Link
						to={movieUrl}
						className="btn btn-primary">
						Show details
					</Link>
				</div>
			</div>
		</div>
	);
};
// if user searches for a movie, this component will be rendered and will display the results of the search. If there are no results, it will display a message saying that there are no results.

const SearchView = ({ keyword, searchResults }) => {
	const title = `You are searching for ${keyword}`;

	const resultsHTML = searchResults.map((obj, i) => {
		return (
			<MovieCard
				key={i}
				movie={obj}
			/>
		);
	});

	return (
		<div>
			<Hero text={title} />
			{resultsHTML.length > 0 ? (
				<div className="container">
					<div className="row">{resultsHTML}</div>
				</div>
			) : (
				<div className="container">
					<h1 className="text-center text-black text">No results found for "{keyword}"</h1>
				</div>
			)}
		</div>
	);
};





export default SearchView;

// const SearchView = ({ keyword, searchResults }) => {
// 	const title = `You are searching for ${keyword}`;

// 	const resultsHTML = searchResults.map((obj, i) => {
// 		return (
// 			<MovieCard
// 				key={i}
// 				movie={obj}
// 			/>
// 		);
// 	});

// 	return (
// 		<div>
// 			<Hero text={title} />
// 			{resultsHTML && (
// 				<div className="container">
// 					<div className="row">{resultsHTML}</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// };