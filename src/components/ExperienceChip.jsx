export function ExperienceChip({ icon, title ,custom}) {
	return (
		<div className={`flex flex-col items-center ${custom}`}>
			<div className="text-6xl mb-2">{icon}</div>
			<h2 className="text-light text-2xl uppercase">{title}</h2>
		</div>
	);
}
