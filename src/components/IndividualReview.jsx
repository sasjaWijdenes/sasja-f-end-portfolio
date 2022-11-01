import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import * as api from '../api.js'

const dayjs = require('dayjs'),
    relativeTime = require('dayjs/plugin/relativeTime')

const IndividualReview = () => {
    const { review_id } = useParams(),
        [review, setReview] = useState(),
        [isLoading, setIsLoading] = useState(true)
    
    dayjs.extend(relativeTime)
    useEffect(() => {
        api.fetchReviewById(review_id).then(({ data: { review } }) => {
            setReview(review)
            setIsLoading(false)
        }, [])
    })
    if(isLoading) return <h2>Loading ...</h2>
    const { title, designer, votes, comment_count, review_img_url, created_at, review_body, owner, category } = review;
    const postedAgo = dayjs(created_at).fromNow()
    return <main className="review-page">
        <section className="upper-review-section">
            <h2>{title}</h2>
            <img src={`${review_img_url}`} alt={title} />
            <div className="review-page-cat-and-time">
                <h3>{category}</h3>
                <h3>{postedAgo}</h3>
            </div>
            
        </section>
        <section className="body-review-section">
            <h3>{owner}</h3>
            <h3>{designer}</h3>
            <p>{review_body}</p>
            <button>{votes}</button>
            <button>{comment_count}</button>
        </section>
        <section className="comment-section">Comments to go here ...</section>
    </main>
}
export default IndividualReview