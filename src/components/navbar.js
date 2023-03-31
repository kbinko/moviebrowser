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
			</div>
		</ReactstrapNavbar>
	);
}

export default Navbar;
