import { Link } from "../components/Link";
import { useState } from "react";

export function Nav() {
	return (
		<div className="wrapper p-4">
			<Mobile />
			<Desktop />
		</div>
	);
}

function Mobile() {
	const [renderMenu, setRenderMenu] = useState(false);
	return (
		<>
			<div className="flex justify-between items-center xl:hidden">
				<h1 className="text-3xl font-bold gradient-text bg-gradient-to-r from-left to-right">
					Numonu
				</h1>
				<i
					className="fa-solid fa-bars text-2xl hover:text-orquidea"
					onClick={() => setRenderMenu(!renderMenu)}
				></i>
			</div>
			{renderMenu && (
				<ul className="space-y-2 text-2xl xl:hidden">
					<Link content="inicio" href="#" />
					<Link content="sobre mi" href="#" />
					<Link content="servicios" href="#" />
					<Link content="experiencia" href="#" />
					<Link content="portafolio" href="#" />
					<Link content="contacto" href="#" />
				</ul>
			)}
		</>
	);
}
function Desktop() {
	return (
		<div className="hidden justify-between items-center xl:flex">
			<h1 className="text-3xl font-bold gradient-text bg-gradient-to-r from-left to-right">
				Numonu
			</h1>
			<ul className="flex gap-6 text-xl">
				<Link content="inicio" href="#" />
				<Link content="sobre mi" href="#" />
				<Link content="servicios" href="#" />
				<Link content="experiencia" href="#" />
				<Link content="portafolio" href="#" />
				<Link content="contacto" href="#" />
			</ul>
		</div>
	);
}
