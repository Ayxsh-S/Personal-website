export default function Navbar() {
    return (
        <header className="nav-wrap">
            <div className="container nav">
                <a href="#top" className="brand" aria-label="Home">
                    Ayush Sahu
                </a>

                <nav className="nav-links" aria-label="Primary">
                    <a href="#work">Work</a>
                    <a href="#about">About</a>
                    <a href="#writing">Writing</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}