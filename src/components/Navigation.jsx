import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="nav">
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    Devnith's Space
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className={`nav-link ${isActive('/')}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/cinema" className={`nav-link ${isActive('/cinema')}`}>
                            Cinema
                        </Link>
                    </li>
                    <li>
                        <Link to="/books" className={`nav-link ${isActive('/books')}`}>
                            Books
                        </Link>
                    </li>
                    <li>
                        <Link to="/songs" className={`nav-link ${isActive('/songs')}`}>
                            Songs
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
