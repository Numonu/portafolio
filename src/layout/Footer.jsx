export function Footer() {
	return (
		<footer className="bg-dark">
			<div className="text-light wrapper flex flex-col items-center gap-12 py-12 text-2xl font-medium lg:flex-row lg:justify-between">
				<div>
					<h1 className="text-4xl mb-4 font-bold gradient-text bg-gradient-to-r from-left to-right">
						Pasa a saludar!
					</h1>
					<div className="flex flex-row justify-around flex-wrap text-4xl">
						<i className="fa-brands fa-instagram hover:text-orquidea cursor-pointer"></i>
						<i className="fa-brands fa-linkedin-in hover:text-orquidea cursor-pointer"></i>
						<i className="fa-brands fa-itch-io hover:text-orquidea cursor-pointer"></i>
					</div>
				</div>
				<div className="text-center lg:-order-1">
					<h2>
						<i className="fa-solid fa-phone mr-2"></i>
						+51 935369832
					</h2>
					<h2>
						<i className="fa-regular fa-envelope mr-2"></i>
						juan.villegas.dev@gmail.com
					</h2>
				</div>
				<h2>
					<i className="fa-regular fa-copyright mr-2"></i>
					2023 all rights reserved
				</h2>
			</div>
		</footer>
	);
}
