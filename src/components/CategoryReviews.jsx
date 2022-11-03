import * as api from '../api.js'
import Card from './Card'
import {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'

const CategoryReviews = () => {
    const [reviews, setReviews] = useState(),
            [isLoading, setIsLoading] = useState(true),
            { categoryX } = useParams()   
    useEffect(() => {
        api.fetchReviewsByCategory(categoryX).then(({ data: { reviews } }) => {
        setReviews(reviews)
        setIsLoading(false)
        })
    }, [categoryX])
    
    if(isLoading) return <p>Loading...</p>
    return <main className="review-cards-container">
    {reviews.map(review => {
        return <Card key={review.review_id} review={review} />
    })}
</main>
}

export default CategoryReviews