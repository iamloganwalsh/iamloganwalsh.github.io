import "../styles/Intro.css"
import face from "../assets/face.jpg"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
// import downloadResume from "../assets/download_resume.png"
import resume from "../assets/LoganWalshResume.pdf"

export const Intro = () => {


    return (
        <section id="Intro">
            <div className="IntroDivLeft">
                <h2>Logan Walsh</h2>
                <h1>Software Developer</h1>
                <p>Currently based in Auckland, New Zealand</p>

                <div className="IntroLargeButtons">
                    <a href={resume} target="_blank" className="IntroBtn">View Resume</a>
                    <a href="#Contact" className="IntroBtn" style={{backgroundColor: "rgb(54, 54, 54)", color: "white"}}>Contact Me</a>
                </div>

                <div className="IntroSocials">
                    <a href="https://www.linkedin.com/in/logwalsh/" title="View LinkedIn" target="_blank"><img src={linkedin}/></a>
                    <a href="https://github.com/iamloganwalsh" title="View Github" target="_blank"><img src={github} /></a>
                    {/* Credit to https://www.freeiconspng.com/img/19032 */}
                    {/* <a href={resume} title="View Resume" target="_blank"><img src={downloadResume}/></a> */}
                </div>
            </div>

            <div className="IntroDivRight">
                <img src={face} alt="Logan Walsh's face"></img>
            </div>
        </section>
        
    )
}