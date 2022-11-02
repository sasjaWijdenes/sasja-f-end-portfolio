import * as api from '../api.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const [categories, setCategories] = useState([])
    const [toggleSideBar, setToggleSideBar] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        api.fetchCategories().then(({ data: { categories: fetchedCategories } }) => {
            setCategories(fetchedCategories)
        })
    }, [])
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)
    }, [])

    const toggleNav = () => {
        setToggleSideBar(!toggleSideBar)
    }

    return <nav id="sidebar-nav" className= {toggleSideBar || screenWidth > 750 ? '': 'colapse'} >
        {((toggleSideBar || screenWidth > 750) && (  
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
        ))}
        <button onClick={toggleNav} className='hamburger-btn'>
            <span className='hm-bar' />
            <span className='hm-bar' />
            <span className='hm-bar' />
        </button>
    </nav>
    
}

export default Sidebar