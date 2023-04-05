import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
	Collapse,
	Navbar as ReactstrapNavbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	Form,
	Input,
	Button,
} from "reactstrap";

function Navbar({ searchText, setSearchText }) {
	const history = useHistory();
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const updateSearchText = (e) => {
		history.push("/search");
		setSearchText(e.target.value);
	};

	return (
		<ReactstrapNavbar color="light" light expand="md">
			<div className="container-fluid">
<<<<<<< HEAD:src/components/navbar.js
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="navbar-nav me-auto" navbar>
						<NavItem>
							<NavLink tag={Link} to="/moviebrowser">
								Movie Browser
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/moviebrowser" activeClassName="active">
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/about">
								About
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/" disabled>
=======
				<Link className="navbar-brand" to="/">
					Movie Browser
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link disabled" to="/">
>>>>>>> 4572e46 (s):src/components/navbar.jsx
								coming soon
							</NavLink>
						</NavItem>
					</Nav>
					<Form
						inline
						onSubmit={(e) => {
							e.preventDefault();
							history.push("/search");
						}}>
<<<<<<< HEAD:src/components/navbar.js
						<div className="d-flex">
							<Input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
								value={searchText}
								onChange={updateSearchText}
							/>
							<Button color="outline-success" type="submit">
								Search
							</Button>
						</div>
					</Form>
				</Collapse>
=======
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							value={searchText}
							onChange={updateSearchText}
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
>>>>>>> 4572e46 (s):src/components/navbar.jsx
			</div>
		</ReactstrapNavbar>
	);
}

export default Navbar;
