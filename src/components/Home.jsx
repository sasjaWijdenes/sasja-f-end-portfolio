import Card from "./Card"

const Home = ({ allReviews }) => {
    console.log(allReviews, typeof allReviews)
    return <main className="review-cards-container">
        {allReviews.map(review => {
            return <Card key={review.review_id} review={review} />
        })}
    </main>
}
export default Home