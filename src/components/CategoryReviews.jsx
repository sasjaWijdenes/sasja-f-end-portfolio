import * as api from '../api.js'
import Card from './Card'
import Filter from './Filter.jsx'
import {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'

const CategoryReviews = ({sort, setSort, order, setOrder}) => {
    const [reviews, setReviews] = useState(),
            [isLoading, setIsLoading] = useState(true),
            { categoryX } = useParams()   
    useEffect(() => {
        api.fetchReviewsByCategory(categoryX, sort, order).then(({ data: { reviews } }) => {
        setReviews(reviews)
        setIsLoading(false)
        })
    }, [categoryX, sort, order])
    
    if(isLoading) return <p>Loading...</p>
    return <main className="review-cards-container">
        <Filter sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
    {reviews.map(review => {
        return <Card key={review.review_id} review={review} />
    })}
</main>
}

export default CategoryReviews