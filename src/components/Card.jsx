import { Link } from 'react-router-dom'
import * as api from '../api.js'
import { useState } from 'react'
import {FaAngleUp, FaAngleDown, FaRegCommentAlt} from 'react-icons/fa'
const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Card = ({ review }) => {
    const {review_id, title, votes, comment_count, review_img_url, created_at, review_body, owner, category } = review;

    const [cardVotes, setCardVotes] = useState(votes)
    const [upVoted, setUpVoted] = useState(false)
    const [downVoted, setDownVoted] = useState(false)
    const [votingFailed, setVotingFailed] = useState(false)
    const reviewBody = review_body.slice(0, 100) + ' . . .'
    const postedAgo = dayjs(created_at).fromNow()

    const upVote = () => {
        if (downVoted && !upVoted) setDownVoted(false)
        if (!upVoted) {
            api.addVote(review_id, { inc_votes: 1 }).catch(err => {
                console.log({ 'error from upvote: ': { err } })
                setCardVotes(cardVotes - 1)
                setVotingFailed(true)
                setUpVoted(false)
            })
            setCardVotes(prevCardVotes => prevCardVotes + 1)
        }
        if (!downVoted) setUpVoted(true)
    }
    const downVote = () => {
        if (upVoted && !downVoted) setUpVoted(false)
        if (!downVoted) {
            api.addVote(review_id, { inc_votes: -1 }).catch(err => {
                console.log({ 'error from downvote: ': { err } })
                setCardVotes(cardVotes - 1)
                setVotingFailed(true)
                setDownVoted(false)
            })
            setCardVotes(prevCardVotes => prevCardVotes - 1)
        }
        if (!upVoted) setDownVoted(true)
    }
    
    return <Link to={`reviewPage/${review_id}`} className="card">
        <h3 className="card-title">{ title }</h3>
        <img src={`${review_img_url}`} alt={title} />
        <div className="vote-cont">
            <FaAngleUp onClick={upVote} className={`upVote ${upVoted? 'grey-out' : ''}`} />
            <div className='vote-disp'>{votingFailed? 'unable to vote': cardVotes}</div>
            <FaAngleDown onClick={downVote} className={`downVote ${downVoted? 'grey-out' : ''}`} />
        </div>
        <FaRegCommentAlt className="comments"></FaRegCommentAlt>
        <p className='comment-count'>{comment_count}</p>
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