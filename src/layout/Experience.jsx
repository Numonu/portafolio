import { ExperienceChip } from "../components/ExperienceChip";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiBlender } from "react-icons/si";

export function Experience() {
	return (
		<div className="bg-dark" id="experience">
			<div className="wrapper p-4 pb-12">
				<h1 className="text-light text-4xl text-center mb-12">
					Experiencia..
				</h1>
				<div className="flex flex-wrap justify-center gap-20 sm:w-[60%] sm:mx-auto xl:w-[50%]">
					<ExperienceChip
						icon={<i className="fa-brands fa-html5"></i>}
						title="html"
						custom="text-orange-500"
					/>
					<ExperienceChip
						icon={<i className="fa-brands fa-css3-alt"></i>}
						title="css"
						custom="text-cyan-500"
					/>
					<ExperienceChip
						icon={<i className="fa-brands fa-js"></i>}
						title="js"
						custom="text-amber-400"
					/>
					<ExperienceChip
						icon={<i className="fa-brands fa-react"></i>}
						title="react"
						custom="text-cyan-500"
					/>
					<ExperienceChip
						icon={<SiFirebase/>}
						title="firebase"
						custom="text-amber-400"
					/>
					<ExperienceChip
						icon={<i className="fa-brands fa-git-alt"></i>}
						title="git"
						custom="text-red-500"
					/>
					<ExperienceChip
						icon={<i className="fa-brands fa-github"></i>}
						title="github"
						custom="text-zinc-500"
					/>
					<ExperienceChip
						icon={<i className="fa-brands fa-sass"></i>}
						title="sass"
						custom="text-pink-500"
					/>
					<ExperienceChip
						icon={<SiTailwindcss/>}
						title="tailwind"
						custom="text-emerald-500"
					/>
					<ExperienceChip
						icon={<i className="fa-brands fa-unity"></i>}
						title="unity"
						custom="text-light"
					/>
					<ExperienceChip
						icon={<SiBlender/>}
						title="blender"
						custom="text-orange-500"
					/>
				</div>
			</div>
		</div>
	);
}
