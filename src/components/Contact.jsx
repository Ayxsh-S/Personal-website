export default function Contact() {
    return (
        <section className="section" id="contact">
            <div className="container contact-grid">
                <div className="contact-copy" data-reveal>
                    <p className="eyebrow">Contact</p>
                    <h2>Let's build something together!</h2>
                    <p>Contact me to get started</p>

                    <div className="contact-details">
                        <a href="ayushsahu0716@outlook.com">ayushsahu0716@outlook.com</a>
                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                            Github
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                            LinkedIn 
                        </a>
                    </div>
                </div>

                <form className="contact-card" data-reveal onSubmit={(e) => e.preventDefault()}>
                    <div className="form-row">
                        <label>
                            Name
                            <input type="text" placeholder="Your name" />
                        </label>
                        <label>
                            Email
                            <input type="email" placeholder="you@company.com" />
                        </label>
                    </div>
                    <label>
                        <input type="text" placeholder="Internship, freelance, collaboration..." />
                    </label>

                    <label>
                        Message
                        <textarea rows="6" placeholder="Tell me what you need"></textarea>
                    </label>
                    <button className="button button-primary button-full" type="submit">
                        Send inquiry
                    </button>
                </form>
            </div>
        </section>
    );
}