import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import AboutView from "./components/about.js";
import SearchView from "./components/SearchView.js";
import { Switch, Route } from "react-router-dom";
import MovieView from "./components/MovieView.js";
import Error from "./components/error.js";

// TMDB API key = 815c72f987b4f062f4a312f99bed13da
// example link = https://api.themoviedb.org/3/search/movie?api_key=815c72f987b4f062f4a312f99bed13da&language=en-US&query=Star%20Wars&page=1&include_adult=false

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [searchText, setSearchText] = useState(" ");

	useEffect(() => {
		if (searchText !== " ") {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=815c72f987b4f062f4a312f99bed13da&language=en-US&query=${searchText}&page=1&include_adult=false`
			)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setSearchResults(data.results);
				});
		} else {
			setSearchResults([]);
		}
	}, [searchText]);

	return (
		<div>
			<Navbar searchText={searchText} setSearchText={setSearchText} />
			<Switch>
				<Route path="/moviebrowser/" exact>
					<Home />
				</Route>
				<Route path="/about" component={AboutView} />
				<Route path="/search">
					<SearchView keyword={searchText} searchResults={searchResults} />
				</Route>
				<Route path="/movies/:id" component={MovieView} />
				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
