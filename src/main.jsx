import React from "react";
import ReactDOM from "react-dom/client";
import { Hero } from "./layout/Hero";
import { Nav } from "./layout/Nav";
import "./styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<header className="bg-dark text-light">
			<Nav />
			<Hero />
		</header>
	</React.StrictMode>
);
