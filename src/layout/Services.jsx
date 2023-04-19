export function Services() {
	return (
		<div className="bg-dark text-light">
			<div className="wrapper p-4 py-8">
				<h1 className="text-3xl text-center">Servicios..</h1>
				<div className="flex flex-col gap-12 py-6">
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
		<div className="bg-dark p-4 card border-4">
			<header className="flex items-center gap-4 mb-4">
				<div className="bg-light text-orquidea w-20 aspect-square flex items-center justify-center rounded-full text-4xl">
					{icon}
				</div>
				<h1 className="text-3xl uppercase">{title}</h1>
			</header>
			<p className="text-zinc-300 text-2xl">{description}</p>
		</div>
	);
}
