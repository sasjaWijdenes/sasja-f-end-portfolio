import axios from "axios";

const api = axios.create({
    baseURL: 'https://sasjas-portfolio.herokuapp.com/'
})

export const fetchAllReviews = () => {
    return api.get('api/reviews')
}

export const fetchCategories = () => {
    return api.get('api/categories')
}

export const fetchReviewsByCategory = (category) => {
    return api.get(`api/reviews?category=${category}`)
}