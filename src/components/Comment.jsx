import CommentVotingButtons from './CommentVotingButtons'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext.jsx'
import { MdDeleteForever } from 'react-icons/md'
import * as api from '../api.js'

const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Comment = ({ comment: { comment_id, body, review_id, author, votes, created_at }, setComments, setCommentCount }) => {

    const deleteComment = () => {
        api.deleteComment(comment_id)
        setComments(prevComments => prevComments.filter(comment => comment.comment_id !== comment_id))
        setCommentCount(prevCount => prevCount-1)
    }


    const { user } = useContext(UserContext)
    const postedAgo = dayjs(created_at).fromNow()
    return <div className="comment" >
        <p className="comment-author">{author}</p>
        {comment_id ? <CommentVotingButtons votes={votes} id={comment_id} /> : <></>}
        {user.username === author ? <MdDeleteForever className='delete-comment' onClick={deleteComment} />: <></>}
        <p className='comment-date'>{postedAgo}</p>
        <p className="comment-body">{body}</p>
    </div>
}
export default Comment