import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-text">
                        Connect with me on Instagram:{' '}
                        <a
                            href="https://instagram.com/devnithw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            @devnithw
                        </a>
                    </p>
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Devnith's Space. All reviews are personal opinions.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
