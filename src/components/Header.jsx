import { Link } from "react-router-dom"
import ProfileWidget from "./ProfileWidget"

const Header = () => {
    return <header>
        <h1>NC GAMES</h1>
        <nav>
            <Link to='/comunity' > COMUNITY </Link>
            <Link to='/' > HOME </Link>
            <Link to='/reviewPage/newReview' > NEW REVIEW </Link>
        </nav>
        <ProfileWidget />
    </header>
}
export default Header