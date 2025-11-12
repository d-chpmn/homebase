import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const navStyle = { display: "flex", gap: 12, padding: 12, background: "#f3f4f6" };
	return (
		<nav style={navStyle}>
			<Link to="/">Dashboard</Link>
			<Link to="/todo">To Do</Link>
			<Link to="/quotes">Quotes</Link>
			<Link to="/messages">Messages</Link>
		</nav>
	);
}
