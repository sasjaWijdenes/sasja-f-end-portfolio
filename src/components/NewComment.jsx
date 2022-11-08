import * as api from '../api'
import { useState, useEffect, useContext } from 'react'
import { FaPlus } from 'react-icons/fa'
import { UserContext } from '../contexts/UserContext.jsx'
import Comment from './Comment'

const NewComment = ({id, setPostConfirmed, postConfirmed, setCommentCount}) => {
    const [newCommentBody, setNewCommentBody] = useState()
    const [isPosted, setIsPosted] = useState(false)
    const { user, setUser } = useContext(UserContext)
    const newComment = {
            body: newCommentBody,
            review_id: Number(id),
            username: user.username,
            votes: 0,
            created_at: new Date()
        }
    const handleChange = (event) => {
        setNewCommentBody(event.target.value)
    }
    const submitComment = () => { 
        api.submitComment(id, newComment).then(({ data }) => {
            setIsPosted(false)
            setPostConfirmed(true)
            setCommentCount(count => count+1)
            setNewCommentBody('')
        })
        .catch(() => {
            setIsPosted(false)
            setNewCommentBody('')
        })
        setIsPosted(true)
    }

    return (<section id="new-comment-section">
        {isPosted ? <Comment comment={newComment} /> : <></>}
        <form id="new-comment-form">
            <textarea name="new-comment-body" id="new-comment-text" value={newCommentBody} onChange={handleChange} />
            <FaPlus className={`add-comment-btn ${isPosted? 'grey-out': ''}`} onClick={submitComment} />
        </form>
    </section>)
}
export default NewComment