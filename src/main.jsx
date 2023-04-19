import React from "react";
import ReactDOM from "react-dom/client";
import { About } from "./layout/About";
import { Services } from "./layout/Services";
import { Hero } from "./layout/Hero";
import { Nav } from "./layout/Nav";
import { Experience } from "./layout/Experience";
import "./styles/tailwind.css";
import { Portfolio } from "./layout/Portfolio";
import { Footer } from "./layout/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<header className="bg-dark text-light">
			<Nav />
			<Hero />
		</header>
		<main>
			<About/>
			<Services/>
			<Experience/>
			<Portfolio/>
		</main>
		<Footer/>
	</React.StrictMode>
);
