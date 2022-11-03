import { Link } from 'react-router-dom'
const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Card = ({ review }) => {
    const {review_id, title, votes, comment_count, review_img_url, created_at, review_body, owner, category } = review;

    const reviewBody = review_body.slice(0, 100) + ' . . .'

    const postedAgo = dayjs(created_at).fromNow()
    
    return <Link to={`reviewPage/${review_id}`} className="card">
        <h3 className="card-title">{ `${title}` }</h3>
        <img src={`${review_img_url}`} alt="{title}" />
        <button className='votes'>Votes: {votes} </button>
        <button className="comments">Comments: {comment_count}</button>
        <div className="category-chip"> {category} </div>
        <div className="card-info">
            <div className="card-info-top">
                <p className="card-reviewer"> {`${owner}`} </p>
                <p className="card-date">{`${postedAgo}`}</p>
            </div>
            <p className="card-review-body"> {`${reviewBody}`} </p>
        </div>
    </Link>
}

export default Card