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
						Desde que era niño, quedé fascinado por la tecnología y su capacidad para transformar vidas. Ahora, utilizo mis habilidades en programacion para dar vida a interfaces intuitivas y atractivas. Si buscas un desarrollador comprometido y creativo, estoy emocionado de colaborar contigo en nuevos proyectos y hacer que tu proyecto cobre vida en el mundo digital
						<span className="text-orquidea text-3xl">"</span>
					</p>
				</div>
			</div>
		</div>
	);
}
