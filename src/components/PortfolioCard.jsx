export function PortfolioCard({
	src,
	title,
	description,
	pageLink,
	sourceLink,
	skills
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
				<h1 className="text-orquidea text-3xl font-medium capitalize xl:text-2xl">{title}</h1>
				<p className="text-xl tracking-wider lowercase mb-3">
					{description}
				</p>

				<div className="flex flex-wrap gap-6 text-3xl sm:text-xl">
					<a href={pageLink || "#"} target="_blank">
						<button className="bg-orquidea px-4 py-1 rounded-sm hover:text-light transition-colors">
							<i className="fa-solid fa-arrow-up-right-from-square text-xl mr-3"></i>
							visitar
						</button>
					</a>
					{sourceLink && (
						<a href={sourceLink} target="_blank">
							<button className="bg-orquidea px-4 py-1 rounded-sm hover:text-light transition-colors">
							<i className="fa-brands fa-github text-xl mr-3"></i>
								fuente
							</button>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
