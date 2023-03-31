import Hero from "./hero";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const MovieCard = ({ movie }) => {
	const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
	const movieUrl = `/movies/${movie.id}`;

	return (
		<Col lg="4" md="6" sm="12" className="my-4">
			<Card>
				{movie.poster_path ? (
					<CardImg top src={posterUrl} alt="movie poster" />
				) : (
					<div className="card-img-top" style={{ height: "622px", backgroundColor: "black" }}>
						<h3 className="text-center text-white text" style={{ paddingTop: "250px" }}>
							No image available
						</h3>
					</div>
				)}
				<CardBody>
					<CardTitle tag="h5">{movie.original_title}</CardTitle>
					<Link to={movieUrl} className="btn btn-primary">
						Show details
					</Link>
				</CardBody>
			</Card>
		</Col>
	);
};

const SearchView = ({ keyword, searchResults }) => {
	const title = `You are searching for ${keyword}`;

	const resultsHTML = searchResults.map((obj, i) => {
		return <MovieCard key={i} movie={obj} />;
	});

	return (
		<div>
			<Hero text={title} />
			{resultsHTML.length > 0 ? (
				<Container>
					<Row>{resultsHTML}</Row>
				</Container>
			) : (
				<Container>
					<h1 className="text-center text-black text">No results found for "{keyword}"</h1>
				</Container>
			)}
		</div>
	);
};

export default SearchView;
