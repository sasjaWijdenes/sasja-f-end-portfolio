import axios from "axios";

const api = axios.create({
    baseURL: 'https://sasjas-portfolio.herokuapp.com/'
})

export const fetchAllReviews = (sort, order) => {
    return api.get(`api/reviews?sort=${sort}&order=${order? 'ASC': 'DESC'}`)
}

export const fetchCategories = () => {
    return api.get('api/categories')
}

export const fetchReviewById = (review_id) => {
    return api.get(`api/reviews/${review_id}`)
}

export const fetchReviewsByCategory = (category, sort, order) => {
    return api.get(`api/reviews?category=${category}&sort=${sort}&order=${order? 'ASC': 'DESC'}`)
}

export const addVote = (review_id, votes) => {
    return api.patch(`api/reviews/${review_id}`, votes)
}

export const fetchComments = (review_id) => {
    return api.get(`api/reviews/${review_id}/comments`)
}

export const addCommentVote = (comment_id, votes) => {
    return api.patch(`api/comments/${comment_id}`, votes)
}

export const getProfiles = () => {
    return api.get(`api/users`)
}

export const submitComment = (review_id, comment) => {
    return api.post(`/api/reviews/${review_id}/comments`, comment)
}

export const deleteComment = (comment_id) => {
    return api.delete(`api/comments/${comment_id}`)
}