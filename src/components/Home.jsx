import Card from "./Card"
import Filter from "./Filter"

const Home = ({ allReviews, sort, setSort, order, setOrder }) => {

    
    return <main className="review-cards-container">
        <Filter sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
        {allReviews.map(review => {
            return <Card key={review.review_id} review={review} />
        })}
    </main>
}
export default Home