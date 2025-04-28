import AboutSection from "./about/page";
import ProjectsSection from "./projects/page";
import ContactSection from "./contact/page";
import HomeSection from "./home/page";
import styles from "./page.module.css";

export default function LandingPage() {
    return (
        <div className={styles.snapContainer}>
            <HomeSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
}
