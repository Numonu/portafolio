export function Hero() {
	return (
		<div className="px-4 pt-6 bg-[url('images/wave.svg')] bg-no-repeat bg-bottom">
			<div className="wrapper flex flex-col xl:flex-row xl:h-[60vh]">
				<div className="flex flex-col items-center gap-8 text-center xl:w-1/2 xl:justify-center xl:items-start xl:text-start">
					<h1 className="text-orquidea text-4xl font-bold">
						Desarrollo Web
					</h1>
					<p className="text-light text-2xl">
						Hola! , me llamo Juan David soy desarrollador web
						front-end especializado en la creacion de sitios
					</p>
					<button className="bg-orquidea text-3xl px-4 py-2 rounded-full glow-hover">
						contactame
					</button>
				</div>
				<div className="h-72 bg-[url('images/avatar.webp')] bg-contain bg-bottom bg-no-repeat xl:w-1/2 xl:h-full"></div>
			</div>
		</div>
	);
}
