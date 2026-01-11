import "../styles/Navbar.css"

export const Navbar = () => {

    return (
        <>  
        <header className="NavbarHeader">
            <div className="NavbarController">
                <div className="NavbarLeft">
                    <a href="./index.html#Intro" onClick="smoothScroll('Intro')">Logan Walsh</a>
                </div>

                <div className="NavbarRight">
                    <a href="./index.html#about" onClick="smoothScroll('about')">About</a>
                    <a href="./index.html#projects_header" onClick="smoothScroll('projects_header')">Projects</a>
                    <a href="./index.html#contact" onClick="smoothScroll('contact')">Contact</a>
                </div>
            </div>
        </header>

        </>
    )
}