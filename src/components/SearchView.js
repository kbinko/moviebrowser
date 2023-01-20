import Hero from "./hero";

const SearchView = ({ keyword, searchResults }) => {
	const title = `You are searching for ${keyword}`;

	const resultsHTML = searchResults.map((obj, i) => {});

	return (
		<div>
			<Hero text={title} />
		</div>
	);
};

export default SearchView;
