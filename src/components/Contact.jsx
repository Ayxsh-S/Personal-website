export default function Contact() {
    return (
        <section className="section" id="contact">
            <div className="container contact-grid">
                <div className="contact-copy" data-reveal>
                    <p className="eyebrow">Contact</p>
                    <h2>Interested in working together?</h2>
                    <p>I’m open to collaborations and new projects. Reach out and let’s turn it into a well-built, modern web experience.</p>

                    <div className="contact-details">
                        <div className="contact-top">
                            <div className="contact-subcontainer">
                                <img className="icon" src="/svg/email.svg" alt="Email" />
                                <p className="eyebrow">Email</p>
                            </div>
                            <a href="mailto:ayushsahu0716@outlook.com">ayushsahu0716@outlook.com</a>
                        </div>
                        <div className="contact-top">
                            <div className="contact-subcontainer">
                                <img className="icon" src="/svg/github.svg" alt="github" />
                                <p className="eyebrow">Github</p>
                            </div>
                            <a href="https://github.com/Ayxsh-S" target="_blank" rel="noreferrer">View projects →</a>
                        </div>
                        <div className="contact-top">
                            <div className="contact-subcontainer">
                                <img className="icon" src="/svg/linkedin.svg" alt="linkedin" />
                                <p className="eyebrow">LinkedIn</p>
                            </div>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Connect →</a> 
                            {/* need to make a linkedin account */}
                        </div>
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
                            <input type="email" placeholder="Your email" />
                        </label>
                    </div>
                    <label>
                        <input type="text" placeholder="What kind of role or project is this?" />
                    </label>

                    <label>
                        Message
                        <textarea rows="6" placeholder="Tell me a little about the opportunity"></textarea>
                    </label>
                    <button className="button button-primary button-full" type="submit">
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
}