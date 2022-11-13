import * as api from '../api'
import { useState, useContext } from 'react'
import { FaPlus } from 'react-icons/fa'
import { UserContext } from '../contexts/UserContext.jsx'

const NewComment = ({id, setPostConfirmed, postConfirmed, setCommentCount, setComments}) => {
    const [newCommentBody, setNewCommentBody] = useState('')
    const [isPosted, setIsPosted] = useState(false)
    const [isBlank, setIsBlank] = useState(false)
    const { user } = useContext(UserContext)
    const newComment = {
            body: newCommentBody,
            review_id: Number(id),
            username: user.username,
            votes: 0,
            created_at: new Date()
        }
    const handleChange = (event) => {
        setNewCommentBody(event.target.value)
        setIsBlank(false)
    }
    const submitComment = () => {
        if(newCommentBody !== ''){
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
            setComments((prevComments) => { return prevComments.push(newComment) })
        } else {
            setIsBlank(true)
        }
    }

    return (<section id="new-comment-section">
        <form id="new-comment-form">
            <textarea className={isBlank? 'error-red': ''} name="new-comment-body" id="new-comment-text" value={newCommentBody} onChange={handleChange} />
            <FaPlus className={`add-comment-btn ${isPosted? 'grey-out': ''} ${isBlank? 'error-red': ''}`} onClick={submitComment} />
        </form>
    </section>)
}
export default NewComment