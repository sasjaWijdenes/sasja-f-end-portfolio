import { Link } from "react-router-dom"
import ProfileWidget from "./ProfileWidget"

const Header = () => {
    return <header>
        <h1>NC GAMES</h1>
        <nav>
            <Link className="header-nav" style={{textDecoration: 'none'}} to='/comunity' > COMUNITY </Link>
            <Link className="header-nav" style={{textDecoration: 'none'}} to='/' > HOME </Link>
            <Link className="header-nav" style={{textDecoration: 'none'}} to='/reviewPage/newReview' > NEW REVIEW </Link>
        </nav>
        <ProfileWidget />
    </header>
}
export default Header