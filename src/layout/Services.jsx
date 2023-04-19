export function Services() {
	return (
		<div className="bg-dark text-light">
			<div className="wrapper p-4 py-12">
				<h1 className="text-4xl text-center xl:text-5xl xl:py-6">Servicios..</h1>
				<div className="flex flex-col flex-wrap gap-12 py-6 xl:flex-row xl:justify-center">
					<Card
						icon={<i className="fa-solid fa-display"></i>}
						title="Desarrollo de Sitios Web"
						description="Creacion de sitios web completamente responsivos , asegurando la maxima calidad visual y de estilo asi tambien procurando un diseño responsivo de la manera mas optima posible"
					/>
                    <Card
						icon={<i className="fa-solid fa-mobile-screen"></i>}
						title="Desarrollo de Apps Moviles"
						description="Creacion de sitios web completamente responsivos , asegurando la maxima calidad visual y de estilo asi tambien procurando un diseño responsivo de la manera mas optima posible"
					/>
                    <Card
						icon={<i className="fa-solid fa-gamepad"></i>}
						title="Desarrollo de Videojuegos"
						description="Creacion de sitios web completamente responsivos , asegurando la maxima calidad visual y de estilo asi tambien procurando un diseño responsivo de la manera mas optima posible"
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
				<h1 className="text-3xl text-center uppercase">{title}</h1>
			</header>
			<p className="text-zinc-300 text-2xl">{description}</p>
		</div>
	);
}
