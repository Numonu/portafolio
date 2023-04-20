export function About() {
	return (
		<div className="bg-light world" id="about">
			<div className="wrapper max-w-[1000px] p-4 py-12 flex flex-col justify-center items-center gap-6 xl:flex-row xl:py-16">
				<h1 className="text-orquidea text-3xl font-bold xl:hidden">
					Sobre Mi..
				</h1>
				<div className="relative w-[80%] aspect-square overflow-hidden rounded-xl border-b-8 border-orquidea sm:w-[50%]">
					<img
						src="images/profile.webp"
						alt="Juan Villegas"
						className="absolute inset-0 hover:scale-110 transition-transform"
					/>
				</div>
				<div className="sm:w-[70%]">
					<h1 className="text-orquidea hidden text-3xl font-bold xl:block mb-4">
						Sobre Mi..
					</h1>
					<p className="text-dark text-2xl">
						<span className="text-orquidea text-3xl">"</span>
						Soy Juan David, un desarrollador Front-End apasionado
						por crear experiencias digitales atractivas y
						funcionales para los usuarios. Me especializo en HTML,
						CSS y JavaScript, y me mantengo actualizado en las
						últimas tendencias y herramientas del desarrollo web. Si
						estás buscando un desarrollador comprometido y creativo,
						no dudes en contactarme. ¡Estoy emocionado de trabajar
						contigo en nuevos proyectos!
						<span className="text-orquidea text-3xl">"</span>
					</p>
				</div>
			</div>
		</div>
	);
}
