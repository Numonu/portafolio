export function ServiceCard({ icon, title, description }) {
	return (
		<div className="bg-dark p-4 card border-4 sm:mx-auto sm:w-[90%] sm:px-8 xl:w-[40%] xl:mx-0">
			<header className="flex flex-wrap justify-center items-center gap-4 mb-4 sm:justify-start">
				<div className="bg-light text-orquidea w-16 aspect-square flex items-center justify-center shrink-0 rounded-full text-4xl">
					{icon}
				</div>
				<h1 className="text-2xl text-center uppercase">{title}</h1>
			</header>
			<p className="text-zinc-300 text-2xl">{description}</p>
		</div>
	);
}