import { useState } from "react";

export function Nav() {
	return (
		<div className="bg-dark text-light p-4">
			<Mobile />
			<Desktop />
		</div>
	);
}

function Mobile() {
	const [renderMenu, setRenderMenu] = useState(false);
	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold gradient-text bg-gradient-to-r from-left to-right">
					Numonu
				</h1>
				<i
					className="fa-solid fa-bars text-2xl hover:text-orquidea"
					onClick={() => setRenderMenu(!renderMenu)}
				></i>
			</div>
			{renderMenu && (
				<ul className="space-y-2">
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
function Desktop() {}
function Link({ content, href }) {
	return (
		<li>
			<a
				href={href}
				className="w-full inline-block text-2xl text-center uppercase hover:text-orquidea"
			>
				{content}
			</a>
		</li>
	);
}
