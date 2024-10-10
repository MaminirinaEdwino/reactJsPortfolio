import { FaCss3, FaHtml5, FaPhp, FaPython, FaReact } from "react-icons/fa6"
import Tech from "../tech/tech"
import { FaSymfony } from "react-icons/fa"
import { MdJavascript } from "react-icons/md"
import { SiFastapi, SiGodotengine } from "react-icons/si"
import { GoDot } from "react-icons/go"
import { BiLogoBlender } from "react-icons/bi"
import { RiTailwindCssFill } from "react-icons/ri"

export default function Technos() {
    let liste_technos = [
        {
            techno: "ReactJs",
            level: "Intermediate",
            icon: <FaReact />
        },
        {
            techno: "Symfony",
            level: "Intermediate",
            icon: <FaSymfony />
        }
        ,
        {
            techno: "PHP",
            level: "Intermediate",
            icon: <FaPhp />
        }
        ,
        {
            techno: "Javascript",
            level: "Advanced",
            icon: <MdJavascript />
        }
        ,
        {
            techno: "Python",
            level: "Advanced",
            icon: <FaPython />
        }
        ,
        {
            techno: "FastAPI",
            level: "Beginner",
            icon: <SiFastapi />
        }
        ,
        {
            techno: "Godot Engine",
            level: "Beginner",
            icon: <SiGodotengine />
        }
        ,
        {
            techno: "Blender",
            level: "Beginner",
            icon: <BiLogoBlender />
        }
        ,
        {
            techno: "HTML",
            level: "Advanced",
            icon: <FaHtml5 />
        }
        ,
        {
            techno: "CSS",
            level: "Advanced",
            icon: <FaCss3 />
        }
        ,
        {
            techno: "TailwindCSS",
            level: "Beginner",
            icon: <RiTailwindCssFill />
        }
    ]
    return <>
        <section id="techno">
            <h1>Langages and Frameworks</h1>
            {liste_technos.map((tech, i) => <Tech name={tech.techno} key={i} level={tech.level} icon={tech.icon} />)}
        </section>
    </>
}