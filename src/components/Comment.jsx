import CommentVotingButtons from './CommentVotingButtons'
import { useState, useContext } from 'react'
import {UserContext} from '../contexts/UserContext.jsx'
import * as api from '../api.js'

const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Comment = ({ comment: { comment_id, body, review_id, author, votes, created_at } }) => {

    const deleteComment = () => {
        api.deleteComment(comment_id)
    }


    const { user, setUser } = useContext(UserContext)
    console.log(user, 'user', author, 'author')
    const postedAgo = dayjs(created_at).fromNow()
    return <div className="comment" >
        <p className="comment-author">{author}</p>
        {comment_id ? <CommentVotingButtons votes={votes} id={comment_id} /> : <></>}
        {user.username === author ? <button className='delete-comment' onClick={deleteComment}>DELETE</button> : <></>}
        <p className='comment-date'>{postedAgo}</p>
        <p className="comment-body">{body}</p>
    </div>
}
export default Comment