import { motion } from "framer-motion";
export function ExperienceChip({ icon, title, custom, motionDelay }) {
	return (
		<motion.div
			className={`relative flex flex-col items-center ${custom}`}
			initial={{ opacity: 0, scale: 1.5, y: 50 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ delay: motionDelay }}
		>
			<div className="text-6xl mb-2">{icon}</div>
			<h2 className="text-light text-2xl uppercase">{title}</h2>
		</motion.div>
	);
}
