import Hero from "./hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieView = () => {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=815c72f987b4f062f4a312f99bed13da&language=en-US`)
			.then((response) => response.json())
			.then((data) => {
				setMovieDetails(data);
				setIsLoading(false);
			});
	}, [id]);

	function renderMovieDetails() {
		const posterPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
		const backdropURL = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
		if (isLoading) {
			return <Hero text="Loading..." />;
		} else {
			return (
				<>
					<Hero
						text={movieDetails.original_title}
						backdrop={backdropURL}
					/>
					<div className="container my-5">
						<div className="row">
							<div
								className=" col-md-3"
								id="moviePoster">
								<img
									src={posterPath}
									alt="..."
									className="img-fluid shadow rounded"
								/>
							</div>
							<div className="col-md-9">
								<h2>{movieDetails.original_title}</h2>
								<p>{movieDetails.overview}</p>
								<h2>Release date:</h2>
								<p>{movieDetails.release_date}</p>
								<h2>Lenght</h2>
								<p>{movieDetails.runtime} minutes</p>
								<h2>Ratings:</h2>
								<p>Average rate: {movieDetails.vote_average}/10</p>
								<p>Vote count: {movieDetails.vote_count}</p>
							</div>
						</div>
					</div>
				</>
			);
		}
	}

	return renderMovieDetails();
};

export default MovieView;
