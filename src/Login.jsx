import React, { useContext, useState } from "react";
import { UserContext } from "./contexts/User";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  
	const { user, setUser } = useContext(UserContext);
	const [username, setUsername] = useState(user);

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser(username);
		setUsername("");
		setLoggedIn(true);
	};
	return (
		<div style={{ marginLeft: "35px" }}>
			<h3 style={{ marginBottom: "10px" }}>Login</h3>
			{!user.length && (
				<form
					onSubmit={handleSubmit}
					style={{ display: "flex", gap: "10px", alignItems: "center" }}
				>
					<label htmlFor="login">Username:</label>
					<input
						type="text"
						style={{ padding: "10px 5px" }}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<button type="submit">Login</button>
				</form>
			)}
			{user.length ? <p>{`Logged in as ${user}`}</p> : null}
		</div>
	);
};

export default Login;
