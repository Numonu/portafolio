import { motion } from "framer-motion";
export function ExperienceChip({ icon, title, custom }) {
	return (
		<div className={`relative flex flex-col items-center ${custom}`}>
			<motion.div
				className="bg-dark absolute inset-0"
				initial={{ scaleX: 1 , transformOrigin : "left center" }}
				whileInView={{scaleX : 0}}
			></motion.div>
			<div className="text-6xl mb-2">{icon}</div>
			<h2 className="text-light text-2xl uppercase">{title}</h2>
		</div>
	);
}
