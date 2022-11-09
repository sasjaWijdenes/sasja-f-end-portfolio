import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import * as api from '../api.js'
import Comment from "./Comment.jsx"
import {FaCommentMedical} from 'react-icons/fa'
import NewComment from "./NewComment.jsx"

const dayjs = require('dayjs'),
    relativeTime = require('dayjs/plugin/relativeTime')

const IndividualReview = () => {
    const { review_id } = useParams(),
        [review, setReview] = useState(),
        [comments, setComments] = useState([]),
        [commentCount, setCommentCount] = useState(comments.length),
        [postConfirmed, setPostConfirmed] = useState(false),
        [isLoading, setIsLoading] = useState(true),
        [isLoadingComments, setIsLoadingComments] = useState(true)
    
    dayjs.extend(relativeTime)
    useEffect(() => {
        api.fetchReviewById(review_id).then(({ data: { review } }) => {
            setReview(review)
            setIsLoading(false)
        })
    }, [])
    useEffect(() => {
        api.fetchComments(review_id).then(({ data: { comments } }) => {
            setComments(comments)
            setIsLoadingComments(false)
            setCommentCount(comments.length)
        })
    }, [postConfirmed])

    if(isLoading) return <h2>Loading ...</h2>
    const { title, designer, votes, comment_count, review_img_url, created_at, review_body, owner, category } = review;
    const postedAgo = dayjs(created_at).fromNow()
    return <main className="review-page">
        <div className="new-comment-cont">
            <a href="#new-comment-section">
                <FaCommentMedical className="new-comment-icon" />
            </a>
        </div>
        <section className="upper-review-section">
            <h2>{title}</h2>
            <img src={`${review_img_url}`} alt={title} />
            <div className="review-page-cat-and-time">
                <h3>{category}</h3>
                <h3>{postedAgo}</h3>
            </div>
        </section>
        <section className="body-review-section">
            <div className="body-review-top" >
                <h3>Author: {owner}</h3>
                <h3>Designer: {designer}</h3>
            </div>
            <p>{review_body}</p>
        </section>
            <div className="review-pg-btn-cont">
                <button>Votes: {votes}</button>
                <button>Comments: {commentCount}</button>
            </div>
        {console.log(comments.length)}
        <section className="comment-section">
            {isLoadingComments ?
                <p>Loading Comments ...</p> :
                comments.length ?
                    <>
                    {comments.map((comment) => {
                        return <Comment comment={comment} setComments={setComments} setCommentCount={setCommentCount} key={comment.comment_id} className='comment-component' />
                        })}
                    </>
                :
                    <p className="no-comments">A tummble weed rolls folornly over a desolate, comment-less landscape ... </p>
            }
            <NewComment id={review_id} setComments={setComments} setPostConfirmed={setPostConfirmed} postConfirmed={postConfirmed} setCommentCount={setCommentCount} />
        </section>
        
    </main>
}
export default IndividualReview