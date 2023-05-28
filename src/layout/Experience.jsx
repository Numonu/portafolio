import { ExperienceChip } from "../components/ExperienceChip";
import { experienceList } from "../database/experienceData";

export function Experience() {
	return (
		<div className="bg-dark" id="experience">
			<div className="wrapper p-4 pb-12">
				<h1 className="text-light text-4xl text-center mb-12">
					Tecnologias..
				</h1>
				<div className="flex flex-wrap justify-center gap-20 sm:w-[60%] sm:mx-auto xl:w-[50%]">
					{experienceList.map((e , i) => (
						<ExperienceChip
							icon={e.icon}
							title={e.title}
							custom={e.custom}
							motionDelay={(i / 11)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
