import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
export function PortfolioCard({
	src,
	title,
	description,
	pageLink,
	sourceLink,
	skills,
}) {
	return (
		<div className="text-dark w-full rounded-lg overflow-hidden group">
			<div className="h-[20rem] m-4 mb-0 shadow-md overflow-hidden sm:h-[13rem]">
				<img
					className="h-full w-full object-cover xl:group-hover:scale-[1.15] transition-transform"
					src={src}
					alt={title}
				/>
			</div>
			<div className="p-4">
				<h2 className="capitalize text-lg opacity-80">
					{skills.join("•")}
				</h2>
				<h1 className="text-orquidea text-3xl font-medium capitalize xl:text-2xl">
					{title}
				</h1>
				<p className="text-xl tracking-wider lowercase mb-3">
					{description}
				</p>

				<div className="flex flex-wrap gap-6 text-3xl sm:text-xl">
					<a href={pageLink || "#"} target="_blank">
						<button className="bg-orquidea px-4 py-1 flex items-center gap-2 rounded-sm hover:text-light transition-colors">
							<FiExternalLink className="inline" />
							<span>visitar</span>
						</button>
					</a>
					{sourceLink && (
						<a href={sourceLink} target="_blank">
							<button className="bg-orquidea px-4 py-1 flex items-center gap-2 rounded-sm hover:text-light transition-colors">
								<AiFillGithub className="inline" />
								<span>fuente</span>
							</button>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
