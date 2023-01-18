import Hero from "./hero";

const Home = () => {
	return (
		<div>
			<Hero text="Welcome to react 201" />

			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 my-5">
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus tempore pariatur quod
							numquam, nam sunt quia ipsum eius blanditiis ea sequi fuga autem similique consequatur
							molestiae a. Veniam, quaerat provident facilis accusamus itaque asperiores maiores.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
