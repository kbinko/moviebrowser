//  create component that will display the 404 error message if the user tries to access a page that does not exist. This component will be rendered in the App.js file.

import React from "react";
import Hero from "./hero";

const Error = () => {
	return (
		<div>
			<Hero text="404 Error, page not found" />
		</div>
	);
};
export default Error;

// show me how to render this component in the App.js file.
