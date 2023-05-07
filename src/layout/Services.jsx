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
						description="Ofrezco servicios de modelado y diseño 3D para ayudar a que su proyecto cobre vida. Con experiencia en la creación de modelos 3D animados y coloridos para una variedad de industrias, puedo ayudarle a visualizar su producto."
						motionDelay={.2}
					/>
					<ServiceCard
						icon={<i className="fa-solid fa-gamepad"></i>}
						title="Desarrollo de Videojuegos"
						description="Ofrezco servicios de desarrollo de videojuegos para convertir tus ideas en experiencias interactivas emocionantes y atractivas. Desde la conceptualización hasta la publicación, puedo ayudarte a crear juegos personalizados que cautiven a tu audiencia"
						motionDelay={.4}
					/>
				</div>
			</div>
		</div>
	);
}
