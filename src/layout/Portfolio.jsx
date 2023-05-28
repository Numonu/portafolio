import { PortfolioCard } from "../components/PortfolioCard";
import { PortfolioToggle } from "../components/PortfolioToggle";
import db from "../database/bd.json";

export function Portfolio() {
	return (
		<div className="bg-light" id="portfolio">
			<div className="wrapper px-4 py-36">
				<div className="flex justify-between flex-wrap gap-y-4">
					<h1 className="text-dark text-4xl">Portafolio..</h1>
					<div className="text-light flex gap-2">
						<PortfolioToggle title="Web" />
						<PortfolioToggle title="Juegos" />
						<PortfolioToggle title="3D" />
					</div>
				</div>
				<div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 xl:grid-cols-3">
					{db.portafolio.web.map((e) => {
						return (
							<PortfolioCard
								key={e.title}
								src={e.src}
								title={e.title}
								description={e.descripcion}
								pageLink={e.pageLink}
								sourceLink={e.sourceLink}
								skills={e.skills}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
