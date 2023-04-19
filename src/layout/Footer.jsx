export function Footer() {
	return (
		<footer className="bg-dark" id="contact">
			<div className="text-light wrapper flex flex-col items-center gap-12 py-12 text-2xl font-medium lg:flex-row lg:justify-between">
				<div>
					<h1 className="text-4xl mb-4 font-bold gradient-text bg-gradient-to-r from-left to-right">
						Pasa a saludar!
					</h1>
					<div className="flex flex-row justify-around flex-wrap text-4xl">
						<a href="https://www.instagram.com/villegas.arts/" target="_blank">
							<i className="fa-brands fa-instagram hover:text-orquidea cursor-pointer"></i>
						</a>
						<a href="https://www.linkedin.com/in/juan-villegas-dev/" target="_blank">
							<i className="fa-brands fa-linkedin-in hover:text-orquidea cursor-pointer"></i>
						</a>
						<a href="https://github.com/Numonu" target="_blank">
							<i className="fa-brands fa-github hover:text-orquidea cursor-pointer"></i>
						</a>
					</div>
				</div>
				<div className="text-center lg:-order-1">
					<h2>
						<i className="fa-solid fa-phone mr-2"></i>
						+51 952 455 923
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
