export function Experience() {
	return (
		<div className="bg-dark">
			<div className="wrapper p-4 pb-12">
				<h1 className="text-light text-4xl text-center mb-12">
					Experiencia..
				</h1>
				<div className="flex flex-wrap justify-center gap-20 sm:w-[60%] sm:mx-auto xl:w-[50%]">
					<Chip
						icon={<i className="fa-brands fa-html5"></i>}
						title="html"
                        custom="text-orange-500"
					/>
                    <Chip
						icon={<i className="fa-brands fa-css3-alt"></i>}
						title="css"
                        custom="text-cyan-500"
					/>
                    <Chip
						icon={<i className="fa-brands fa-js"></i>}
						title="js"
                        custom="text-yellow-500"
					/>
                    <Chip
						icon={<i className="fa-brands fa-react"></i>}
						title="react"
                        custom="text-cyan-500"
					/>
                    <Chip
						icon={<i className="fa-brands fa-git-alt"></i>}
						title="git"
                        custom="text-red-500"
					/>
					<Chip
						icon={<i className="fa-brands fa-github"></i>}
						title="github"
                        custom="text-zinc-500"
					/>
					<Chip
						icon={<i className="fa-brands fa-sass"></i>}
						title="sass"
						custom="text-pink-500"
					/>
					<Chip
						icon={<i className="fa-solid fa-code"></i>}
						title="tailwind"
						custom="text-emerald-500"
					/>
                    <Chip
						icon={<i className="fa-brands fa-unity"></i>}
						title="unity"
						custom="text-light"
					/>
				</div>
			</div>
		</div>
	);
}
function Chip({ icon, title ,custom}) {
	return (
		<div className={`flex flex-col items-center ${custom}`}>
			<div className="text-6xl mb-2">{icon}</div>
			<h2 className="text-light text-2xl uppercase">{title}</h2>
		</div>
	);
}
