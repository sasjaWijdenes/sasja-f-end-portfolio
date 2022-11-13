import { useEffect } from 'react'
import { useState, useContext } from 'react'
import * as api from '../api'
import { UserContext } from '../contexts/UserContext.jsx'
import ErrorCommponent from './ErrorCommponent'

const ProfileWidget = ({error, setError}) => {
    const {user, setUser} = useContext(UserContext)
    const [allUsers, setAllUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        api.getProfiles().then(({ data: { users } }) => {
            setAllUsers(users)
            setUser(users[0])
            setIsLoading(false)
        }).catch(err => setError(err))
    }, [])

    if (isLoading) return <h2>Loading...</h2> 
    if(error) return <ErrorCommponent error={error} />
    const { username, name, avatar_url } = user;
    return <div id="profile-widget">
        <div className='profile-names'>
            <p id='name'>{name}</p>
            <p id='userName'>{username}</p>
        </div>
        <img src={`${avatar_url}`} alt="your profile" />
    </div>
}

export default ProfileWidget