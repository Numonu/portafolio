import { useState } from "react";

export function Portfolio() {
	const [active, setActive] = useState(0);
	return (
		<div className="bg-light">
			<div className="wrapper p-4 py-12">
				<div className="flex justify-between flex-wrap gap-y-4">
					<h1 className="text-dark text-4xl">Portafolio..</h1>
					<div className="text-light flex gap-2">
						<div
							className={`bg-dark text-2xl px-4 py-1 shadow-md shadow-orquidea cursor-pointer ${
								active == 0 && "bg-orquidea"
							}`}
							onClick={() => setActive(0)}
						>
							Web
						</div>
						<div
							className={`bg-dark text-2xl px-4 py-1 shadow-md shadow-orquidea cursor-pointer ${
								active == 1 && "bg-orquidea"
							}`}
							onClick={() => setActive(1)}
						>
							Juegos
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 xl:grid-cols-3">
                    <Card title="web de ejemplo" description="esta es una web de ejemplo esta es una web de ejemplo"/>
                    <Card title="web de ejemplo" description="esta es una web de ejemplo esta es una web de ejemplo"/>
                </div>
			</div>
		</div>
	);
}

function Card({title , description}) {
	return (
		<div className="bg-dark text-light shadow-orquidea w-full rounded-lg overflow-hidden shadow-md group">
			<div className="h-[20rem] overflow-hidden sm:h-[13rem]">
				<img
					src="https://images.pexels.com/photos/12680345/pexels-photo-12680345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					className="h-full w-full object-cover xl:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform"
				/>
			</div>
			<div className="p-4">
				<h1 className="mb-2 text-2xl uppercase">
                    {title}
                </h1>
				<p className="text-zinc-300 text-xl mb-6">
					{description}
				</p>
				<div className="flex flex-wrap justify-center gap-6 text-3xl sm:text-2xl">
					<button className="bg-gradient-to-r from-left to-right px-4 py-2 rounded-xl">
						<i className="fa-solid fa-arrow-up-right-from-square text-2xl mr-3"></i>
						<span>visitar</span>
					</button>
                    <button className="bg-gradient-to-r from-left to-right px-4 py-2 rounded-xl">
						<i className="fa-brands fa-github mr-3"></i>
						<span>fuente</span>
					</button>
				</div>
			</div>
		</div>
	);
}
