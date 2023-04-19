export function Experience() {
	return (
		<div className="bg-dark">
			<div className="wrapper p-4">
				<h1 className="text-light text-4xl text-center pb-12 xl:text-5xl">
					Experiencia..
				</h1>
				<div className="flex flex-wrap justify-center gap-20 sm:w-[60%] sm:mx-auto xl:w-[50%]">
					<Chip
						icon={<i class="fa-brands fa-html5"></i>}
						title="html"
                        custom="text-orange-500"
					/>
                    <Chip
						icon={<i class="fa-brands fa-css3-alt"></i>}
						title="css"
                        custom="text-blue-500"
					/>
                    <Chip
						icon={<i class="fa-brands fa-js"></i>}
						title="js"
                        custom="text-yellow-500"
					/>
                    <Chip
						icon={<i class="fa-brands fa-react"></i>}
						title="react"
                        custom="text-cyan-500"
					/>
                    <Chip
						icon={<i class="fa-solid fa-ghost"></i>}
						title="tailwind"
                        custom="text-emerald-500"
					/>
                    <Chip
						icon={<i class="fa-brands fa-unity"></i>}
						title="unity"
					/>
				</div>
			</div>
		</div>
	);
}
function Chip({ icon, title ,custom}) {
	return (
		<div className={`text-light flex flex-col items-center gradient-text bg-gradient-to-r from-slate-800 to-red-600 ${custom}`}>
			<div className="text-6xl mb-2">{icon}</div>
			<h2 className="text-2xl uppercase">{title}</h2>
		</div>
	);
}
