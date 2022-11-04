import CommentVotingButtons from './CommentVotingButtons'
import { useContext } from 'react'
import UserContext from './contexts/UserContext'

const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Comment = ({ comment: {comment_id, body, review_id, author, votes, created_at } }) => {
    const postedAgo = dayjs(created_at).fromNow()
    return <div className="comment" >
        <p className="comment-author">{author}</p>
        <CommentVotingButtons votes={votes} id={comment_id} />
        <p className='comment-date'>{postedAgo}</p>
        <p className="comment-body">{body}</p>
    </div>
}
export default Comment