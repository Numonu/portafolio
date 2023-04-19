import { PortfolioCard } from "../components/PortfolioCard";
import { useState } from "react";

export function Portfolio() {
	const [active, setActive] = useState(0);
	return (
		<div className="bg-light">
			<div className="wrapper p-4 py-12">
				<div className="flex justify-between flex-wrap gap-y-4">
					<h1 className="text-dark text-4xl">Portafolio..</h1>
					<div className="text-light flex gap-2">
						<div
							className={`bg-dark text-2xl px-4 py-1 shadow-md shadow-orquidea cursor-pointer ${
								active == 0 && "bg-orquidea"
							}`}
							onClick={() => setActive(0)}
						>
							Web
						</div>
						<div
							className={`bg-dark text-2xl px-4 py-1 shadow-md shadow-orquidea cursor-pointer ${
								active == 1 && "bg-orquidea"
							}`}
							onClick={() => setActive(1)}
						>
							Juegos
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 xl:grid-cols-3">
					<PortfolioCard
						title="web de ejemplo"
						description="esta es una web de ejemplo esta es una web de ejemplo"
					/>
					<PortfolioCard
						title="web de ejemplo"
						description="esta es una web de ejemplo esta es una web de ejemplo"
					/>
				</div>
			</div>
		</div>
	);
}
