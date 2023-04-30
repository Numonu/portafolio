export function PortfolioToggle({value,valueTo , callback , title}) {
	return (
		<div
			className={`bg-dark text-2xl px-4 py-1 shadow-md shadow-orquidea cursor-pointer ${
				value == valueTo && "bg-orquidea"
			}`}
			onClick={() => (callback && callback(valueTo))}
		>
			{title}
		</div>
	);
}
