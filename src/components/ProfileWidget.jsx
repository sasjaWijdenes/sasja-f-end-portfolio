import { useEffect } from 'react'
import { useState, useContext } from 'react'
import * as api from '../api'
import { UserContext } from '../contexts/UserContext.jsx'

const ProfileWidget = () => {
    const {user, setUser} = useContext(UserContext)
    const [allUsers, setAllUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(() => {
        api.getProfiles().then(({ data: { users } }) => {
            setAllUsers(users)
            setUser(users[0])
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <h2>Loading...</h2> 
    const { username, name, avatar_url } = user;
    return <div id="profile-widget">
        <div className='profile-names'>
            <p id='name'>{name}</p>
            <p id='userName'>{username}</p>
        </div>
        <img src={`${avatar_url}`} alt="your profile picture" />
    </div>
}

export default ProfileWidget