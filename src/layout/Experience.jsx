export function Experience() {
	return (
		<div className="bg-dark">
			<div className="wrapper p-4">
				<h1 className="text-light text-4xl text-center pb-12">
					Experiencia..
				</h1>
				<div className="flex flex-wrap justify-center gap-12 sm:w-[60%] sm:mx-auto">
					<Chip
						icon={<i class="fa-brands fa-html5"></i>}
						title="html"
					/>
                    <Chip
						icon={<i class="fa-brands fa-css3-alt"></i>}
						title="css"
					/>
                    <Chip
						icon={<i class="fa-brands fa-js"></i>}
						title="js"
					/>
                    <Chip
						icon={<i class="fa-brands fa-react"></i>}
						title="react"
					/>
                    <Chip
						icon={<i class="fa-solid fa-wind"></i>}
						title="tailwind"
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
function Chip({ icon, title }) {
	return (
		<div className="text-light flex flex-col items-center gradient-text bg-gradient-to-r from-slate-800 to-red-600">
			<div className="text-4xl mb-2">{icon}</div>
			<h2 className="text-2xl uppercase">{title}</h2>
		</div>
	);
}
