import React from "react";
import { Container, Row, Col } from "reactstrap";
import Hero from "./hero";

const Home = () => {
	return (
		<div>
			<Hero text="Welcome to MovieBrowser" />
			<section className="bg-light mb-0">
				<Container>
					<Row className="justify-content-center">
						<Col md={8} lg={6}>
							<div className="py-5">
								<h2 className="text-center mb-4">Discover a World of Movies</h2>
								<p className="lead text-center mb-5">
									Welcome to MovieBrowser – your ultimate destination for all things movies! Our
									website provides you with an extensive database of movies from various genres, eras,
									and countries, all in one place. With MovieBrowser, you can easily search for any
									movie you want and get detailed information about it, including its plot summary,
									release date, length, and ratings. So, what are you waiting for? Start browsing our
									movie database and embark on a cinematic journey that will take you to different
									worlds and experiences. Use the search bar above to get started!
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
};

export default Home;
