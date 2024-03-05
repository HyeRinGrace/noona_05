import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'

//1. 배너 만들기 => popular 영화를 들고 와서 첫번째 아이템으로
//2. popular movie
//3. top rated movie
//4. upcoming movie

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>
    </div>
  )
}

export default Homepage
