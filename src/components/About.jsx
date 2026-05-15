export default function About() {
    return (
        <section className="section" id="about">
            <div className="container about-grid">
                <div className="about-copy" data-reveal>
                    <p className="eyebrow">About</p>
                    <h2>Building polished web experiences with purpose.</h2>
                    <p>I design and build clean, thoughtful web experiences with a focus on clarity, responsiveness, and attention to detail. This site highlights the projects, decisions, and problem-solving behind my work.</p>
                </div>

                <div className="about-card" data-reveal>
                    <h3>What this site signals</h3>
                    <div className="about-items">
                        <div>
                            <span className="about-label">Taste</span>
                            <p>Clear typography, strong hierarchy, and visual restraint.</p>
                        </div>
                        <div>
                            <span className="about-label">Execution</span>
                            <p>Responsive sections, small motion, and polished card design.</p>
                        </div>
                         <div>
                            <span className="about-label">Thinking</span>
                            <p>Project stories that show decisions, not just screenshots.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}