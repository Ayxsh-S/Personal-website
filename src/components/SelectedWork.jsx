import { projects } from "../data/siteContent";
import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
    return (
        <section className="section" id="work">
            <div className="container">
                <div className="section-head" data-reveal>
                    <p className="eyebrow">Selected work</p>
                    <h2>Featured Projects</h2>
                    <p className="section-copy">
                        A few projects I’ve built across social, commerce, utility and interactive experiences.
                    </p>
                </div>


                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}