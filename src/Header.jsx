import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserProvider } from "./contexts/User";
const Header = () => {
	return (
		<header>
			<Link to={"/"}>
				<h1>NC News</h1>
			</Link>

			<Link to={'login'}>
				<p>Login</p>
			</Link>
		</header>
	);
};

export default Header;
