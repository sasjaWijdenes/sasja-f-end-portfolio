const Splash = ({totalNumReviews}) => {

    return <div id="splash">
        <h1>NC GAMES</h1>
        <p>{totalNumReviews} reviews and counting!</p>
        <div id="splash-reviews">
            <div className="splash-review" ></div>
            <div className="splash-review" ></div>
            <div className="splash-review" ></div>
        </div>
    </div>
}
export default Splash