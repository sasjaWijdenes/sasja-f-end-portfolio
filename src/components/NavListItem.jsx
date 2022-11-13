import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavListItem = ({ slug, description }) => {
    const [isHover, setIsHover] = useState(false)

    const toggleHover = () => setIsHover(hover => !hover)

    return <Link style={{textDecoration: 'none'}} to={`/reviews/${slug}`} > <li className='nav-list-item' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <h2>{slug}</h2>
        {isHover && (<p className={`sidebar-item-desc`}>{description}</p>)}
    
</li>
</Link>
}
export default NavListItem