import { writing } from "../data/siteContent";

export default function Writing() {
    return (
        <section className="section" id="writing">
            <div className="container">
                <div className="section-head" data-reveal>
                    <p className="eyebrow">Writing</p>
                    <h2>I write short project notes that explain what I built, why I made each choice, and what I would improve next. That gives a clearer view of how I work than screenshots alone.</h2>
                    <p className="section-copy">
                        A few concise notes.
                    </p>
                </div>

                <div className="writing-grid">
                    {writing.map((item) => (
                        <article className="note-card" key={item.title} data-reveal>
                            <span className="note-meta">{item.meta}</span>
                            <h3>{item.title}</h3>
                            <p>{item.excerpt}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}