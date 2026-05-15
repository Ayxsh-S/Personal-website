import { writing } from "../data/siteContent";

export default function Writing() {
    return (
        <section className="section" id="writing">
            <div className="container">
                <div className="section-head" data-reveal>
                    <p className="eyebrow">Writing</p>
                    <h2>Project stories that show decisions, not just screenshots.</h2>
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