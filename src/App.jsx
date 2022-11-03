import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import IndividualReview from './components/IndividualReview';
import Comunity from './components/Comunity';
import NewReview from './components/NewReview';
import Splash from './components/Splash';
import * as api from './api.js'
import CategoryReviews from './components/CategoryReviews';

export const userContext = createContext()

function App() {
  const [isLoading, setIsLoading] = useState(true),
    [allReviews, setAllReviews] = useState([]),
    [user, setUser] = useState()

  useEffect(() => {
    api.fetchAllReviews().then(({data: {reviews}}) => {
      setAllReviews(reviews)
      setIsLoading(false)
    })
  }, [])
  
  if (isLoading) return <h2>Loading...</h2> 

  return (
    <userContext.Provider value = { {user, setUser} }>
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
    </userContext.Provider>
  )
}

export default App;
