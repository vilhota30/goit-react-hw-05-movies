import React, {useEffect, useState} from 'react';
import {Content, List, Title} from './Reviews.styled';
import {useParams} from 'react-router-dom';
import { fetchMovieReviews } from 'components/servicesApi/API';
import BackToTop from '../BackToTop/BackToTop';
import Loader from '../Loader/Loader';


const Reviews = () => {
    
    const {movieId} = useParams();

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [, setError] = useState(null);

    useEffect(() => {
        if (!movieId) return;
        
        const fetchReviewsData = async () => {
            try{
                setIsLoading(true);
                const reviews = await fetchMovieReviews(movieId);
                setReviews(reviews.results);
            } catch (error) {
                setError(error.message);
            } finally{
                setIsLoading(false);
            }
        };

        fetchReviewsData();
    }, [movieId, ]);

    if (reviews === null || isLoading) {
        return <Loader/>
    }

    return(
        <div>
            {reviews.length === 0 && (
                <Title>
                    Sorry, but we don't have any reviews for this cast...
                </Title>
            )}
            <List>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h3>{review.author}</h3>
                        <Content>{review.content}</Content>
                    </li>
                ))}
            </List>
            <BackToTop/>
        </div>
    );
};

export default Reviews;