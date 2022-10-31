const Card = ({ review }) => {
    const { review_id, title, votes, comment_count, review_img_url, created_at, review_body, owner, designer, category } = review;

    const reviewBody = review_body.slice(0, 100) + ' . . .'
    
    return <div className="card" id="review_id">
        <h3 className="card-title">{ `${title}` }</h3>
        <img src={`${review_img_url}`} alt="{title}" />
        <div className="card-info">
            <div className="card-info-top">
                <p className="card-reviewer"> {`${owner}`} </p>
                <p className="card-date">{`${created_at}`}</p>
            </div>
            <p className="card-review-body"> {`${reviewBody}`} </p>
        </div>
    </div>
}

export default Card