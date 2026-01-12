import "../styles/Projects.css"
import vm_image from "../assets/vm_electron.png"
import filler from "../assets/face.jpg"

const ProjectCard = ({project_title, project_description, image}) => {

    return (
        <div className="ProjectCard">
            <img src={image}></img>
            <h2>{project_title}</h2>
            <p>{project_description}</p>
        </div>
    )

}

export const Projects = () => {
    
    // Risc-V Card
    const title_one = "RISC-V Virtual Machine"
    const description_one = "RISC-V VM built with the RV32I Base instruction set"

    // Filler
    const title_two = "Filler"
    const description_two = "Lorem ipsum"

    return (
        <section id="Projects">
            <h2>Featured Projects</h2>
            <div className="FeaturedProjectsController">
                <ProjectCard project_title={title_one} project_description={description_one} image={vm_image}/>
                <ProjectCard project_title={title_two} project_description={description_two} image={filler}/>
            </div>
            
        </section>
    )
}