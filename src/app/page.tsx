import AboutSection from "@/components/sections/About";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";
import HomeSection from "@/components/sections/Home";
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
