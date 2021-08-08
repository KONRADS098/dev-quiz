import {useState} from "react";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-dark navbar-static-top navbar-expand-md">
            <div className="container">
                <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbar-items" aria-controls="navbar-items"
                        aria-expanded={!isNavCollapsed} aria-label="Toggle navigation"
                        onClick={handleNavCollapse}>
                    <span className="sr-only">Toggle navigation</span>
                    ☰
                </button>
                <Link className="navbar-brand" to="/">DevQuiz</Link>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbar-items">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/quizzes" className="nav-link">Quizzes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
