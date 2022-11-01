import * as api from '../api.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        api.fetchCategories().then(({ data: { categories: fetchedCategories } }) => {
            setCategories(fetchedCategories)
        }, [])
    })


    return <nav id="sidebar-nav">
        <ul id='nav-list'>
            {categories.map(category => {
                const {slug, description} = category
                return <Link to={`/reviews/${slug}`} key={`${slug}`}> <li className='nav-list-item'>
                    <h2>{slug}</h2>
                    <p>{description}</p>
                </li>
                </Link>
            })}
        </ul>
    </nav>
}

export default Sidebar