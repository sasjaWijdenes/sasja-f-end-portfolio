import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import IndividualReview from './components/IndividualReview';
import Comunity from './components/Comunity';
import NewReview from './components/NewReview';
import Splash from './components/Splash';
import * as api from './api.js'

function App() {
  const [allReviews, setAllReviews] = useState([])
  useEffect(() => {
    api.fetchAllReviews().then((data) => {
      console.log(data)
    })
  }, [])

  return (
    <BrowserRouter >
      <Splash />
      <div className="main-website">
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<Home />} />
        <Route path='reviews/:categories' element={<Home />} />
        <Route path='/reviews/:review_id' element={<IndividualReview/>} />
        <Route path='/reviews/newReview' element={<NewReview/>} />
        <Route path='/comunity' element={<Comunity/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
