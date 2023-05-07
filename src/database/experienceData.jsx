import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiBlender } from "react-icons/si";

export const experienceList = [
	{
		icon: <i className="fa-brands fa-html5"></i>,
		title: "html",
		custom: "text-orange-500",
	},
	{
		icon: <i className="fa-brands fa-css3-alt"></i>,
		title: "css",
		custom: "text-cyan-500",
	},
    {
		icon: <i className="fa-brands fa-js"></i>,
		title: "js",
		custom: "text-amber-400",
	},
    {
        icon : <i className="fa-brands fa-react"></i>,
        title : "react",
        custom : "text-cyan-500",
    },
    {
        icon : <SiFirebase/>,
        title : "firebase",
        custom : "text-amber-400",
    },
    {
        icon : <i className="fa-brands fa-git-alt"></i>,
        title : "git",
        custom : "text-red-500",
    },
    {
        icon : <i className="fa-brands fa-github"></i>,
        title : "github",
        custom : "text-zinc-500",
    },
    {
        icon : <i className="fa-brands fa-sass"></i>,
        title : "sass",
        custom : "text-pink-500",
    },
    {
        icon : <SiTailwindcss/>,
        title : "tailwindcss",
        custom : "text-emerald-500",
    },
    {
        icon : <i className="fa-brands fa-unity"></i>,
        title : "unity",
        custom : "text-light",
    },
    {
        icon : <SiBlender/>,
        title : "blender",
        custom : "text-orange-500"
    }
];
