import * as api from '../api.js'
import { useEffect, useState } from 'react'
import {FaAngleUp, FaAngleDown} from 'react-icons/fa'
const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Card = ({ review }) => {
    const { review_id, title, votes, comment_count, review_img_url, created_at, review_body, owner, designer, category } = review;

    const [cardVotes, setCardVotes] = useState(votes)
    
    const reviewBody = review_body.slice(0, 100) + ' . . .'
    const postedAgo = dayjs(created_at).fromNow()

    const incrementVote = (vote) => {
        const body = { inc_votes: vote }
        api.addVote(review_id, body).then(res => {
            if (res.status !== 200) setCardVotes(cardVotes - 1)
        })
        setCardVotes(cardVotes + 1)
    }
    
    return <div className="card">
        <h3 className="card-title">{ `${title}` }</h3>
        <img src={`${review_img_url}`} alt="{title}" />
        <button onClick={incrementVote(1)} className='votes'> <FaAngleUp /> </button>
        <div className='vote-disp'>{cardVotes}</div>
        <button onClick={incrementVote(-1)} className='votes'> <FaAngleDown /> </button>
        <button className="comments">Comments: {comment_count}</button>
        <div className="category-chip"> {category} </div>
        <div className="card-info">
            <div className="card-info-top">
                <p className="card-reviewer"> {`${owner}`} </p>
                <p className="card-date">{`${postedAgo}`}</p>
            </div>
            <p className="card-review-body"> {`${reviewBody}`} </p>
        </div>
    </div>
}

export default Card