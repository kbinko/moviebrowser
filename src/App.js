import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import AboutView from "./components/about.js";
import SearchView from "./components/SearchView.js";
import { Switch, Route } from "react-router-dom";

function App() {
	const [searchresults, setSearchresults] = useState([]);
	const [searchText, setSearchText] = useState("");

	console.log(searchText, "searchText");
	setTimeout(() => {
		setSearchText("hello");
		console.log(searchText, "searchText new");
	}, 2000);

	return (
		<div>
			<Navbar />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about" component={AboutView} />
				<Route path="/search" component={SearchView} />
			</Switch>
		</div>
	);
}

export default App;
