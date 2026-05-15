export default function ProjectCard({ project }) {
    return (
        <article className="project-card" data-reveal>
            <div className="project-preview-shell">
                <div className="browser-bar">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="project-preview">
                    <img src={project.preview} alt={`${project.title} preview`} />
                </div>
            </div>

            <div className="project-body">
                <div className="project-topline">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                </div>

                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <ul className="impact-list">
                    {project.impact.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>

                <div className="stack-row">
                    {project.stack.map((item) => (
                        <span key={item} className="stack-pill">
                            {item}
                        </span>
                    ))}
                </div>

                <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        View live
                    </a>
                    <a href={project.sourceUrl} target="_blank" rel="norefferer">
                        Source
                    </a>
                </div>
            </div>
        </article>
    );
}