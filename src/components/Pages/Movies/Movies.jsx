import React, {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'components/servicesApi/API';
import MovieList from 'components/MovieList/MovieList';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import SearchForm from 'components/SearchForm/SearchForm';


const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('query');

    const [movies, setMovies] = useState([]);
    const [, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (!searchTerm) {
            return;
        }

        const fetchMoviesSearchData = async  () => {
            try {
                setIsLoading(true);
                const movies = await fetchMoviesSearch(searchTerm);
                setMovies(movies.results);
            } catch (error) {
             setError(error.message);
            } finally{
                setIsLoading(false);
            }
        };

        fetchMoviesSearchData();
    }, [searchTerm]);

    
    const handleSubmit = event => {
        event.preventDefault();

        const searchValue = event.target.children.search.value;
        if (searchValue.trim().length > 2) {
            setSearchParams({
                query: searchValue,
            });
        }
    };

    return (
       <div>
        <SearchForm onSubmit={handleSubmit} />
        {error !== null && <ErrorMessage error={error} />}
        {movies.length > 0 && <MovieList movies={movies} />}
       </div>
    )
}

export default Movies;