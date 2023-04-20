export function PortfolioCard({
	src,
	title,
	description,
	pageLink,
	sourceLink,
	skills
}) {
	return (
		<div className="bg-dark text-light w-full rounded-lg overflow-hidden group">
			<div className="h-[20rem] m-4  border-dashed border-2 border-orquidea overflow-hidden sm:h-[13rem]">
				<img
					className="h-full w-full object-cover xl:group-hover:scale-[1.15] transition-transform"
					src={src}
					alt={title}
				/>
			</div>
			<div className="p-4">
				<h2 className="text-light text-xl uppercase tracking-[0.2rem] xl:text-base xl:mb-2">
					{skills.join("•")}
				</h2>
				<h1 className="text-orquidea text-3xl capitalize xl:text-2xl">{title}</h1>
				<p className="text-zinc-100 text-xl mb-6 tracking-wider lowercase">
					{description}
				</p>

				<div className="flex flex-wrap justify-center gap-6 text-3xl sm:text-2xl">
					<a href={pageLink || "#"} target="_blank">
						<button className="bg-orquidea px-4 py-1 rounded-md hover:outline outline-light">
							<i className="fa-solid fa-arrow-up-right-from-square text-2xl mr-3"></i>
							visitar
						</button>
					</a>
					{sourceLink && (
						<a href={sourceLink} target="_blank">
							<button className="bg-orquidea px-4 py-1 rounded-md hover:outline outline-light">
							<i className="fa-brands fa-github text-2xl mr-3"></i>
								fuente
							</button>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
