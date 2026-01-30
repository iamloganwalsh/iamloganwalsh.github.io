import "../styles/Projects.css"
// import vm_image from "../assets/vm_electron.png"
import risc_v_demo from "../assets/risc-v-demo.mp4"
import st_demo from "../assets/st-demo.mp4"

const ProjectCard = ({project_title, project_description, media, style}) => {

    return (
        <div className="ProjectCard" style={style}>
            <div className="PCMediaWrapper">
                {media.type === "video" ? (
                <video
                    src={media.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                ) : (
                <img
                    src={media.src}
                    alt={media.alt || project_title}
                />
                )}
            </div>
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
    const title_two = "Stock/Crypto Trading Simulator"
    const description_two = "Trading simulator using live market data from Finhubb and Yahoo finance APIs with Redis caching"

    return (
        <section id="Projects">
            <h2>Featured Projects</h2>
            <div className="FeaturedProjectsController">
                <ProjectCard project_title={title_one} project_description={description_one} 
                  media={{
                    type: "video",
                    src: risc_v_demo
                  }}/>

                <ProjectCard project_title={title_two} project_description={description_two} style={{width:"35rem"}}
                  media={{
                    type: "video",
                    src: st_demo
                  }}/>

                {/* <ProjectCard project_title={title_two} project_description={description_two}   
                    media={{
                        type: "image",
                        src: filler,
                        alt: "Filler image"
                    }}/> */}
            </div>
            
        </section>
    )
}