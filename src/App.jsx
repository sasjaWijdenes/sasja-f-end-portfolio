import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import IndividualReview from './components/IndividualReview';
import Comunity from './components/Comunity';
import NewReview from './components/NewReview';
import Splash from './components/Splash';
import * as api from './api.js'
import CategoryReviews from './components/CategoryReviews';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [allReviews, setAllReviews] = useState([])

  useEffect(() => {
    api.fetchAllReviews().then(({data: {reviews}}) => {
      setAllReviews(reviews)
      setIsLoading(false)
    })
  }, [])
  
  if (isLoading) return <h2>Loading...</h2> 

  return (
    <BrowserRouter >
      <Splash />
      <div className="main-website">
      <Header />
      <Sidebar />
      
      <Routes>
        <Route path='reviews/:categoryX' element={<CategoryReviews />} />
        <Route path='reviews/:categoryX/reviewPage/:review_id' element={<IndividualReview />} />
        <Route path='reviewPage/:review_id' element={<IndividualReview />} />
        <Route path='/reviewPage/newReview' element={<NewReview/>} />
        <Route path='/comunity' element={<Comunity />} />
        <Route path='/' element={<Home allReviews={ allReviews } />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
