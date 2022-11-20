import { Link } from "react-router-dom"
import ProfileWidget from "./ProfileWidget"

const Header = ({error, setError}) => {
    return <header>
        <Link to={'/'} style={{textDecoration: 'none'}}><h1>NC GAMES</h1></Link>
        <ProfileWidget error={error} setError={setError} />
    </header>
}
export default Header