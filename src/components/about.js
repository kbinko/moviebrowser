import Hero from "./hero";

const AboutView = () => {
	return (
		<div>
			<Hero text="About us" />
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 my-5">
						<p className="lead">
							Nothing to see here, just a dummy component to make website look more "professional".
						</p>{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</div>
	);
};

export default AboutView;
