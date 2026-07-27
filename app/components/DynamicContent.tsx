import About from "./About";

type DynamicContentProps = {
    section: string;
}

export default function DynamicContent({section}: DynamicContentProps) {
    switch (section) {
        case "about":
            return <About />
        case "work":
            return
        case "projects":
            return
        case "contact":
            return

        default: return null;
    }
}