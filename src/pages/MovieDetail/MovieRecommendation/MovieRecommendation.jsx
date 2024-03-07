import React from 'react';
import '../MovieRecommendation/MovieRecommendation.style.css';
import { useMovieRecommend } from '../../../hooks/useMovieRecommend';
import { useParams } from 'react-router-dom';
import MovieCard from '../../../common/MovieCard/MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../../constants/responsive';
import isLoadingSpinner from '../../../common/Spinner/isLoadingSpinner';

const MovieRecommendation = () => {
    let params = useParams();
    const { data, isLoading, isError,error } = useMovieRecommend(params);

    if (isLoading) {
        return <div>{isLoadingSpinner()}</div>
    }
    if(isError){
        return <div>{error.message}</div>
    }

    let movies = data?.results;

    return (
        <div className="movie-recommendation-container">
            <h4 style={{color:'white'}}>Recommendations</h4>
            <Carousel
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                itemClass="movie-card"
            >
                {movies && movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </Carousel>
        </div>
    );
}

export default MovieRecommendation;
