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
import ErrorPage from './components/ErrorPage';
import ErrorCommponent from './components/ErrorCommponent';
import CategoryReviews from './components/CategoryReviews';
import * as api from './api.js'

function App() {
  const [isLoading, setIsLoading] = useState(true),
    [allReviews, setAllReviews] = useState([]),
    [sort, setSort] = useState('created_at'),
    [order, setOrder] = useState(false),
    [user, setUser] = useState(false),
    [totalNumReviews, setTotalNumReviews] = useState(0),
    [error, setError] = useState(null)

  useEffect(() => {
    api.fetchAllReviews(sort, order).then(({ data: { reviews } }) => {
      setAllReviews(reviews)
      setIsLoading(false)
    }).catch(err => setError(err))
  }, [sort, order])

  useEffect(() => setTotalNumReviews(allReviews.length), [allReviews])
  
  if (error) return <ErrorCommponent error={error} />
  if (isLoading) return <h2>Loading...</h2> 
  

  return (
    <UserContext.Provider value = { {user, setUser} }>
    <BrowserRouter >
        <Splash totalNumReviews={totalNumReviews} />
      <div className="main-website">
      <Header error={error} setError={setError}/>
      <Sidebar error={error} setError={setError} />
      <Routes>
        <Route path='*' element={<ErrorPage/>} />
        <Route path='reviews/:categoryX' element={<CategoryReviews sort={sort} setSort={setSort} order={order} setOrder={setOrder} />} />
        <Route path='reviews/:categoryX/reviewPage/:review_id' element={<IndividualReview error={error} setError={setError} />} />
        <Route path='reviewPage/:review_id' element={<IndividualReview error={error} setError={setError} />} />
        <Route path='/reviewPage/newReview' element={<NewReview/>} />
        <Route path='/comunity' element={<Comunity />} />
        <Route path='/' element={<Home error={error} setError={setError} allReviews={ allReviews } sort={sort} setSort={setSort} order={order} setOrder={setOrder} />} />
        </Routes>
      </div>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
