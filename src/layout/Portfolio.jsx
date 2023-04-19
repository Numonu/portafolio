import { PortfolioCard } from "../components/PortfolioCard";
import { PortfolioToggle } from "../components/PortfolioToggle";
import { useState } from "react";
import db from "../database/bd.json";

export function Portfolio() {
	const [active, setActive] = useState(2);
	return (
		<div className="bg-light" id="portfolio">
			<div className="wrapper p-4 py-12">
				<div className="flex justify-between flex-wrap gap-y-4">
					<h1 className="text-dark text-4xl">Portafolio..</h1>
					<div className="text-light flex gap-2">
						<PortfolioToggle
							title="Web"
							value={active}
							valueTo={0}
							callback={setActive}
						/>
						<PortfolioToggle
							title="Juegos"
							value={active}
							valueTo={1}
							callback={setActive}
						/>
						<PortfolioToggle
							title="Todos"
							value={active}
							valueTo={2}
							callback={setActive}
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 xl:grid-cols-3">
					{active == 0 && <WebGroup />}
					{active == 1 && <GameGroup />}
					{active > 1 && (
						<>
							<WebGroup />
							<GameGroup />
						</>
					)}
				</div>
			</div>
		</div>
	);
}
function WebGroup() {
	return (
		<>
			{db.portafolio.web.map((e) => {
				return (
					<PortfolioCard
						src={e.src}
						title={e.title}
						description={e.descripcion}
						pageLink={e.pageLink}
						sourceLink={e.sourceLink}
					/>
				);
			})}
		</>
	);
}
function GameGroup() {
	return (
		<>
			{db.portafolio.games.map((e) => {
				return (
					<PortfolioCard
						src={e.src}
						title={e.title}
						description={e.descripcion}
						pageLink={e.pageLink}
					/>
				);
			})}
		</>
	);
}
