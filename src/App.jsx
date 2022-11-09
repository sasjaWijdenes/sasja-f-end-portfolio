import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserContext } from './contexts/UserContext';
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
  const [isLoading, setIsLoading] = useState(true),
    [allReviews, setAllReviews] = useState([]),
    [sort, setSort] = useState('created_at'),
    [order, setOrder] = useState(false),
    [user, setUser] = useState(false),
    [totalNumReviews, setTotalNumReviews] = useState(0),
    [topThreeReviews, setTopThreeReviews] = useState([])

  useEffect(() => {
    api.fetchAllReviews(sort, order).then(({ data: { reviews } }) => {
      const topThree = [];
      setAllReviews(reviews)
      setTotalNumReviews(allReviews.length)
      setIsLoading(false)
    })
  }, [sort, order])
  
  if (isLoading) return <h2>Loading...</h2> 

  return (
    <UserContext.Provider value = { {user, setUser} }>
    <BrowserRouter >
        <Splash totalNumReviews={totalNumReviews} />
      <div className="main-website">
      <Header />
      <Sidebar />
      
      <Routes>
        <Route path='reviews/:categoryX' element={<CategoryReviews sort={sort} setSort={setSort} order={order} setOrder={setOrder} />} />
        <Route path='reviews/:categoryX/reviewPage/:review_id' element={<IndividualReview />} />
        <Route path='reviewPage/:review_id' element={<IndividualReview />} />
        <Route path='/reviewPage/newReview' element={<NewReview/>} />
        <Route path='/comunity' element={<Comunity />} />
        <Route path='/' element={<Home allReviews={ allReviews } sort={sort} setSort={setSort} order={order} setOrder={setOrder} />} />
        </Routes>
      </div>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
