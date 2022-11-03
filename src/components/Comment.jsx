const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Comment = ({ comment: { body, review_id, author, votes, created_at } }) => {
    const postedAgo = dayjs(created_at).fromNow()
    return <div className="comment" >
        <p className="comment-author">{author}</p>
        <p className='comment-votes'>{votes}</p>
        <p className='comment-date'>{postedAgo}</p>
        <p className="comment-body">{body}</p>
    </div>
}
export default Comment