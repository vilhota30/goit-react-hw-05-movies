import React, {useEffect, useState} from 'react';
import { fetchMovieCast } from 'components/servicesApi/API';
import {useParams} from 'react-router-dom';
import {List, ActorItem, Title} from './Cast.styled';
import BackToTop from 'components/BackToTop/BackToTop';

const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
const googleSearch = 'https://www.google.com/search?q=';
const defaultImgCast = 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';


const Cast = () => {
    
    const {movieId} = useParams();

    const [cast, setCast] = useState([]);
    const [, setIsLoading] =  useState(false);
    const [, setError] = useState(null);

    useEffect(() => {
        if (!movieId) return;
        
        const fetchMovieCastData = async () => {
            try {
                setIsLoading(true);
                const movieCast = await fetchMovieCast(movieId);
                setCast(movieCast.cast);
            } catch (error) {
                setError(error.message);
            } finally{
                setIsLoading(false);
            }
        };

        fetchMovieCastData();

    },[cast, movieId]);

    return (
        <div>
            {cast.length === 0 && (
                <p>
                    Sorry, but we don't have any cast for this movie
                </p>
            )}
            <List>
                {cast.map(cast => (
                    <ActorItem key={cast.id}>
                        <a
                          href={googleSearch + cast.original_name}
                          rel='noreferrer noopener'
                          target='_blank'
                        >
                        <img
                        width={250}
                        src={
                            cast.profile_path ? baseImgUrl + cast.profile_path : defaultImgCast
                        }
                        alt={cast.original_name}
                        />
                        <Title>{cast.original_name}</Title>
                        </a>
                    </ActorItem>
                   ))}
            </List>
            <BackToTop/>
        </div>
    )
}

export default Cast;