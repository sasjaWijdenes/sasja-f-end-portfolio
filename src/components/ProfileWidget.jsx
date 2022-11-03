import { useEffect } from 'react'
import { useState, useContext } from 'react'
import * as api from '../api'
import { userContext } from '../App'

const ProfileWidget = () => {
    const {user, setUser} = useContext(userContext)
    const [allUsers, setAllUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(() => {
        api.getProfiles().then(({ data: { users } }) => {
            console.log(users)
            setAllUsers(users)
            const firstUser = allUsers[0]
            console.log(firstUser)
            setUser(firstUser)
            setIsLoading(false)
            console.log(user)
        })
    }, [])

    if (isLoading) return <h2>Loading...</h2> 
    const { username, name, avatar_url } = user;
    return <div id="profile-widget">
        <p id='userName'>{username}</p>
        <p id='name'>{name}</p>
        <img src={`${avatar_url}`} alt="your profile picture" />
    </div>
}

export default ProfileWidget