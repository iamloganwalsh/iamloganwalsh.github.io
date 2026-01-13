import "../styles/Navbar.css"

export const Navbar = () => {

    return (
        <>  
        <header className="NavbarHeader">
            <div className="NavbarController">
                <div className="NavbarLeft">
                    <a href="#Intro" onClick="smoothScroll('Intro')">Logan Walsh</a>
                </div>

                <div className="NavbarRight">
                    <a href="#About" onClick="smoothScroll('About')">About</a>
                    <a href="#Projects" onClick="smoothScroll('Projects')">Projects</a>
                    <a href="#Contact" onClick="smoothScroll('Contact')">Contact</a>
                </div>
            </div>
        </header>

        </>
    )
}