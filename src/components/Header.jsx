import { Link } from "react-router-dom"
import ProfileWidget from "./ProfileWidget"

const Header = ({error, setError}) => {
    return <header>
        <h1>NC GAMES</h1>
        <nav className="header-nav">
            <Link className="header-nav-item" style={{textDecoration: 'none'}} to='/comunity' > COMUNITY </Link>
            <Link className="header-nav-item" style={{textDecoration: 'none'}} to='/' > HOME </Link>
            <Link className="header-nav-item" style={{textDecoration: 'none'}} to='/reviewPage/newReview' > NEW REVIEW </Link>
        </nav>
        <ProfileWidget error={error} setError={setError} />
    </header>
}
export default Header