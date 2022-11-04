import Card from "./Card"
import Filter from "./Filter"

const Home = ({ allReviews, sort, setSort }) => {

    
    return <main className="review-cards-container">
        <Filter sort={sort} setSort={setSort} />
        {allReviews.map(review => {
            return <Card key={review.review_id} review={review} />
        })}
    </main>
}
export default Home