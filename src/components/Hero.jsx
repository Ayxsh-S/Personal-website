export default function Hero() {
    return (
        <section className="hero section" id="top">
            <div className="container hero-grid">
                <div className="hero-copy" data-reveal>
                    <p className="eyebrow">FULL-STACK DEVELOPER · UI ENGINEER · JAVASCRIPT</p>
                    <h1>
                       I build modern web experiences that feel fast, polished and easy to use.
                    </h1>
                    <p className="hero-text">
                        I care about clean design, strong engineering, and shipping work that makes a product feel credible from the first click.
                    </p>

                    <div className="hero-actions">
                        <a href="#work" className="button button-primary">View selected work</a>
                        <a href="#contact" className="button button-secondary">Start a conversation</a>
                    </div>

                    <div className="hero-meta">
                        <div>
                            <span className="meta-label">FOCUS</span>
                            <span className="meta-value">Full-stack Javacript applications and modern UI systems</span>
                        </div>
                        <div>
                            <span className="meta-label">STACK</span>
                            <span className="meta-value">React · Node.js · Express · PostgreSQL · Prisma</span>
                        </div>
                         <div>
                            <span className="meta-label">PRIORITY</span>
                            <span className="meta-value">Performance, usability and clean implementation</span>
                        </div>
                    </div>
                </div>

                <aside className="hero-panel" data-reveal>
                    <div className="panel-car">
                        <div className="panel-topline">
                            <span>Maths & CS student</span>
                            <span>London, United Kingdom</span>
                        </div>

                        <div className="profile-mark">
                            <span>AS</span>
                        </div>

                        <h2>Ayush Sahu</h2>
                        <p>I design and build thoughtful interfaces with an eye for clarity, performance, and maintainable code. My focus is turning ideas into clean, production-ready products that feel smooth for users and reliable for teams.</p>

                        <div className="panel-stats">
                            <div>
                                <strong>Clean</strong>
                                <span>Clear, intuitive interfaces</span>
                            </div>
                            <div>
                                <strong>Smart</strong>
                                <span>Strong logic and problem-solving</span>
                            </div>
                            <div>
                                <strong>Fast</strong>
                                <span>Responsive, production-ready builds</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}