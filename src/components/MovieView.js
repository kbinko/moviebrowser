import Hero from "./hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieView = () => {
	const { id } = useParams();
	console.log(id);

	const [movieDetails, setMovieDetails] = useState({});

	useEffect(() => {
		console.log("make an api request", id);
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=815c72f987b4f062f4a312f99bed13da&language=en-US&query=${searchText}&page=1&include_adult=false`
		);
	}, [id]);

	return (
		<>
			<Hero text={movieDetails.original_Title} />
		</>
	);
};

export default MovieView;
