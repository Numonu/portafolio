import { ServiceCard } from "../components/ServiceCard";
import { FaDesktop } from "react-icons/fa";
import { IoSettingsSharp , IoRocket } from "react-icons/io5";

export function Services() {
	return (
		<div className="bg-dark text-light" id="services">
			<div className="wrapper p-4 py-12">
				<h1 className="text-4xl text-center xl:py-6">Servicios..</h1>
				<div className="flex flex-col flex-wrap gap-12 py-6 xl:flex-row xl:justify-center">
					<ServiceCard
						icon={<FaDesktop/>}
						title="Desarrollo"
						description="Desarrollo que garantizan sitios web completamente responsivos, con la mejor calidad visual y de estilo. Además, me aseguro de que el diseño sea óptimo para una experiencia de usuario excelente."
					/>
					<ServiceCard
						icon={<IoRocket/>}
						title="Optimizacion"
						description="Me aseguro de que tu sitio web cargue rápidamente para que los visitantes no tengan que esperar demasiado. Optimizo el código y los recursos del sitio para garantizar una carga eficiente, lo que mejora la experiencia del usuario y reduce la tasa de rebote."
						motionDelay={.2}
					/>
					<ServiceCard
						icon={<IoSettingsSharp/>}
						title="Mantenimiento"
						description="Mantenimiento y soporte para garantizar que los sitios web estén actualizados y funcionando correctamente. Esto implica corregir errores, solucionar problemas de compatibilidad, actualizar contenido y realizar mejoras funcionales según sea necesario"
						motionDelay={.4}
					/>
				</div>
			</div>
		</div>
	);
}
