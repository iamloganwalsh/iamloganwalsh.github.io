"use client";

type NavbarProps = {
    section: string;
    setSection: (section: string) => void;
};

export default function Navbar ({section, setSection}: NavbarProps) {
    return (
        <nav>
          <button onClick={() => setSection("about")}>_about</button>
          <button onClick={() => setSection("work")}>_work</button>
          <button onClick={() => setSection("projects")}>_projects</button>
          <button onClick={() => setSection("contact")}>_contact</button>


        </nav>
    )
}