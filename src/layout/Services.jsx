export function Services() {
	return (
		<div className="bg-dark text-light">
			<div className="wrapper p-4 py-12">
				<h1 className="text-4xl text-center xl:py-6">Servicios..</h1>
				<div className="flex flex-col flex-wrap gap-12 py-6 xl:flex-row xl:justify-center">
					<Card
						icon={<i className="fa-solid fa-display"></i>}
						title="Desarrollo de Sitios Web"
						description="Ofrezco servicios de desarrollo web que garantizan sitios web completamente responsivos, con la mejor calidad visual y de estilo. Además, me aseguro de que el diseño sea óptimo para una experiencia de usuario excelente."
					/>
                    <Card
						icon={<i className="fa-solid fa-mobile-screen"></i>}
						title="Desarrollo de Apps Moviles"
						description="Ofrezco servicios de desarrollo de aplicaciones móviles de alta calidad que se adaptan perfectamente a tus necesidades. Me enfoco en crear aplicaciones móviles atractivas y fáciles de usar con una experiencia de usuario óptima."
					/>
                    <Card
						icon={<i className="fa-solid fa-gamepad"></i>}
						title="Desarrollo de Videojuegos"
						description="Ofrezco servicios de desarrollo de videojuegos de alta calidad, enfocados en crear experiencias de juego emocionantes e interactivas. Mi enfoque se centra en el diseño de juegos atractivos con una jugabilidad fluida y una experiencia de usuario inolvidable."
					/>
				</div>
			</div>
		</div>
	);
}
function Card({ icon, title, description }) {
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
