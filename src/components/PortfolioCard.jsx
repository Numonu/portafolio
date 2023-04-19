export function PortfolioCard({
	src,
	title,
	description,
	pageLink,
	sourceLink,
}) {
	return (
		<div className="bg-dark text-light shadow-orquidea w-full rounded-lg overflow-hidden shadow-md group">
			<div className="h-[20rem] overflow-hidden sm:h-[13rem]">
				<img
					className="h-full w-full object-cover xl:group-hover:scale-110 transition-transform"
					src={src}
					alt={title}
				/>
			</div>
			<div className="p-4">
				<h1 className="mb-2 text-2xl uppercase">{title}</h1>
				<p className="text-zinc-300 text-xl mb-6 tracking-wider">
					{description}
				</p>
				<div className="flex flex-wrap justify-center gap-6 text-3xl sm:text-2xl">
					<a href={pageLink || "#"} target={pageLink ? "_blank" : "_self"}>
						<button className="bg-gradient-to-r from-left to-right px-4 py-1 rounded-sm hover:outline outline-light">
							<i className="fa-solid fa-arrow-up-right-from-square text-2xl mr-3"></i>
							visitar
						</button>
					</a>
					<a href={sourceLink || "#"} target={sourceLink ? "_blank" : "_self"}>
						<button className="bg-gradient-to-r from-left to-right px-4 py-1 rounded-sm hover:outline outline-light">
							<i className="fa-solid fa-arrow-up-right-from-square text-2xl mr-3"></i>
							fuente
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
