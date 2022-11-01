import axios from "axios";

const api = axios.create({
    baseURL: 'https://sasjas-portfolio.herokuapp.com/'
})

export const fetchAllReviews = () => {
    return api.get('api/reviews')
}