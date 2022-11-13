import * as api from '../api.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorCommponent from './ErrorCommponent.jsx';



const Sidebar = ({error, setError}) => {
    const [categories, setCategories] = useState([])
    const [toggleSideBar, setToggleSideBar] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        api.fetchCategories().then(({ data: { categories: fetchedCategories } }) => {
            setCategories(fetchedCategories)
        }).catch(err => setError(err))
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

    if(error) return <ErrorCommponent error={error} />
    return <nav id="sidebar-nav" className= {toggleSideBar || screenWidth > 750 ? '': 'colapse'} >
        {((toggleSideBar || screenWidth > 750) && (  
        <ul id='nav-list'>
            {categories.map(category => {
                const {slug, description} = category
                return <Link style={{textDecoration: 'none'}} to={`/reviews/${slug}`} key={`${slug}`}> <li className='nav-list-item'>
                    <h2>{slug}</h2>
                    <p className='sidebar-item-desc'>{description}</p>
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