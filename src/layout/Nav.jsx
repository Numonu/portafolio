import { motion } from "framer-motion";
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
				<motion.h1
					className="text-3xl font-bold gradient-text bg-gradient-to-r from-left to-right"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ delay: 0.5 }}
				>
					Numonu
				</motion.h1>
				<i
					className="fa-solid fa-bars text-2xl hover:text-orquidea"
					onClick={() => setRenderMenu(!renderMenu)}
				></i>
			</div>
			{renderMenu && (
				<ul className="space-y-2 text-2xl xl:hidden">
					<Link content="inicio" href="#" />
					<Link content="sobre mi" href="#about" />
					<Link content="servicios" href="#services" />
					<Link content="experiencia" href="#experience" />
					<Link content="portafolio" href="#portfolio" />
					<Link content="contacto" href="#contact" />
				</ul>
			)}
		</>
	);
}
function Desktop() {
	return (
		<div className="hidden justify-between items-center xl:flex">
			<motion.h1
				className="text-3xl font-bold gradient-text bg-gradient-to-r from-left to-right"
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ delay: 0.5 }}
			>
				Numonu
			</motion.h1>
			<ul className="flex gap-6 text-2xl">
				<Link content="inicio" href="#" delay={0.5} />
				<Link content="sobre mi" href="#about" delay={0.6} />
				<Link content="servicios" href="#services" delay={0.7} />
				<Link content="experiencia" href="#experience" delay={0.8} />
				<Link content="portafolio" href="#portfolio" delay={0.9} />
				<Link content="contacto" href="#contact" delay={1} />
			</ul>
		</div>
	);
}
