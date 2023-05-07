import { motion } from "framer-motion";
export function ExperienceChip({ icon, title, custom , motionDelay }) {
	return (
		<div className={`relative flex flex-col items-center ${custom}`}>
			<motion.div
				className="bg-dark absolute w-16 aspect-square rounded-full"
				initial={{ scale: 1.5 , transformOrigin : "center" }}
				whileInView={{scale : 0}}
				transition={{delay : motionDelay ,duration : .5}}
			></motion.div>
			<div className="text-6xl mb-2">{icon}</div>
			<h2 className="text-light text-2xl uppercase">{title}</h2>
		</div>
	);
}
