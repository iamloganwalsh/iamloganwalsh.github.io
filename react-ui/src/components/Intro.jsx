import "../styles/Intro.css"
import face from "../assets/face.jpg"

export const Intro = () => {


    return (
        <section id="Intro">
            <div className="IntroDivLeft">
                <h3>Software Developer</h3>
                <p>Hi, I'm Logan Walsh. A recent graduate of University of Auckland with a passion for efficient and optimised systems.</p>
            </div>

            <div className="IntroDivRight">
                <img src={face} alt="Logan Walsh's face"></img>
            </div>
        </section>
        
    )
}