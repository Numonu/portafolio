import { PortfolioCard } from "../components/PortfolioCard";
import { PortfolioToggle } from "../components/PortfolioToggle";
import { Tooltip } from "../components/Tooltip";
import db from "../database/bd.json";

export function Portfolio() {
	return (
		<div className="bg-light" id="portfolio">
			<div className="wrapper px-4 py-36">
				<div className="flex justify-between flex-wrap gap-y-4">
					<h1 className="text-dark text-4xl">Proyectos..</h1>
					<div className="text-light flex gap-2">
						<Tooltip title="ver en instagram" href="https://www.instagram.com/villegas.arts/">
							<PortfolioToggle title="Modelos 3D" />
						</Tooltip>
						<Tooltip title="ver en itchio" href="https://juan-villegas.itch.io">
							<PortfolioToggle title="Juegos" />
						</Tooltip>

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
