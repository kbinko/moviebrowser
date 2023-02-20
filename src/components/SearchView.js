import Hero from "./hero";
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
	const movieUrl = `/movies/${movie.id}`;
	return (
		<div className="col-lg-4 col-md-3 col-2 my-4">
			<div className="card">
				<img
					src={posterUrl}
					className="card-img-top"
					alt={movie.original_title}
				/>
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
			{resultsHTML && (
				<div className="container">
					<div className="row">{resultsHTML}</div>
				</div>
			)}
		</div>
	);
};

export default SearchView;
