import AboutSection from "./about/page";
import ProjectsSection from "./projects/page";
import ContactSection from "./contact/page";
import HomeSection from "./home/page";

export default function Home() {
    return (
        <div className="snap-container">
            <HomeSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
}
