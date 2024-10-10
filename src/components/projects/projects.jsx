import Project from "../project/project"

export default function Projects() {
    let project_list = [
        {
            project : "DominoPro",
            git_link : "https://github.com/MaminirinaEdwino/DominoPro"
        },
        {
            project : "Quotes",
            git_link : "https://github.com/MaminirinaEdwino/quotes"
        },
        {
            project : "E-gouvernance",
            git_link : "https://github.com/MaminirinaEdwino/Hackathon-e-gouvernance"
        },
        {
            project : "Snake-game",
            git_link : "https://github.com/MaminirinaEdwino/SnakeGame"
        }
    ]
    return <section id="project">
        <h1>My Projects</h1>

        {project_list.map((project, i)=><Project
            name={project.project}
            link={project.git_link}
            i={i+1}
        />)}
    </section>
}