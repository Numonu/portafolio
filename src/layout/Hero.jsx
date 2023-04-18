export function Hero() {
	return (
		<div className="px-4 pt-6 bg-[url('../images/wave.svg')] bg-no-repeat bg-bottom">
			<div className="wrapper flex flex-col xl:flex-row xl:h-[30rem]">
				<div className="flex flex-col items-center gap-8 text-center xl:w-1/2 xl:justify-center xl:items-start xl:text-start">
					<h1 className="text-orquidea text-4xl font-bold xl:text-5xl">
						Juan David Villegas
					</h1>
					<p className="text-light text-2xl sm:w-[70%] xl:w-full">
						Hola! , me llamo Juan David soy desarrollador de software especializado
                        en el desarrollo de web front-end
					</p>
					<button className="bg-orquidea uppercase text-2xl px-4 py-2 rounded-full glow-hover relative group overflow-hidden transition-[width]">
						<span className="group-hover:mr-6 transition-[margin]">contactame</span>
                        <i className="fa-solid fa-chevron-down text-2xl absolute -right-7 top-1/2 -translate-y-1/2 group-hover:right-2 transition-[right]"></i>
					</button>
				</div>
				<div className="h-72 bg-[url('../images/avatar.webp')] bg-contain bg-bottom bg-no-repeat xl:w-1/2 xl:h-full"></div>
			</div>
		</div>
	);
}
