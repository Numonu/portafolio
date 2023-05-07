import { motion } from "framer-motion";
export function Link({ content, href, motionDelay }) {
	return (
		<motion.li
			initial={{ opacity: 0, scale: 2, y: 150 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ delay: motionDelay }}
		>
			<a
				href={href}
				className="relative w-full inline-block text-center uppercase hover:text-orquidea transition-transform xl:hover:translate-y-1 xl:hover:scale-x-105 after:absolute xl:after:w-2 after:aspect-square after:bg-transparent after:-top-0 xl:hover:after:bg-orquidea after:rounded-full xl:after:left-1/2 xl:hover:after:-translate-y-2 xl:after:transition-all after:-translate-x-1/2"
			>
				{content}
			</a>
		</motion.li>
	);
}
