import { ServiceCard } from "../components/ServiceCard";

export function Services() {
	return (
		<div className="bg-dark text-light" id="services">
			<div className="wrapper p-4 py-12">
				<h1 className="text-4xl text-center xl:py-6">Servicios..</h1>
				<div className="flex flex-col flex-wrap gap-12 py-6 xl:flex-row xl:justify-center">
					<ServiceCard
						icon={<i className="fa-solid fa-display"></i>}
						title="Desarrollo de Sitios Web"
						description="Ofrezco servicios de desarrollo web que garantizan sitios web completamente responsivos, con la mejor calidad visual y de estilo. Además, me aseguro de que el diseño sea óptimo para una experiencia de usuario excelente."
					/>
					<ServiceCard
						icon={<i className="fa-solid fa-cube"></i>}
						title="Diseño y Modelado 3D"
						description="Ofrezco servicios de diseño y modelado 3D que garantizan modelos, con la mejor calidad visual y de estilo. Además, me aseguro de que el diseño cumpla con los requisitos específicos de cada proyecto. Mi enfoque se centra en ofrecer soluciones de diseño personalizadas y originales"
					/>
					<ServiceCard
						icon={<i className="fa-solid fa-gamepad"></i>}
						title="Desarrollo de Videojuegos"
						description="Ofrezco servicios de desarrollo de videojuegos de alta calidad, enfocados en crear experiencias de juego emocionantes e interactivas. Mi enfoque se centra en el diseño de juegos atractivos con una jugabilidad fluida y una experiencia de usuario inolvidable."
					/>
				</div>
			</div>
		</div>
	);
}
