import Hero from "./hero";

const AboutView = () => {
	return (
		<div>
			<Hero text="About us" />
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 my-5">
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae fugit accusamus
							fugiat quaerat nemo rem optio eveniet possimus hic.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutView;
