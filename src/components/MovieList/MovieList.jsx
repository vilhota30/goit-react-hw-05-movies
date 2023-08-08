import propTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import {useState} from 'react';
import { MovieListContainer,
    MovieItem,
    MovieImage, 
    MovieTitle, 
    CustomLink, 
    Wrapper, 
    WrapperContent,
    WrapperDescription } from './MovieList.styled';
import Loader from 'components/Loader/Loader';
import BackToTop from 'components/BackToTop/BackToTop';


const MovieList = ({movies}) => {

  const location = useLocation();
  const [isLoading] = useState(false);

    if (isLoading) {
         return <Loader/>;
    }

    return(
        <>
        <MovieListContainer>
            {movies.map(movie => (
                <CustomLink state={{from: location}} key={movie.Id} to={`/movies/${movie.Id}`}>
                    <MovieItem>
                        <Wrapper>
                            <MovieImage img={movie.poster_path} alt={movie.title}/>
                              <WrapperDescription>
                                 <WrapperContent>
                                    <MovieTitle>{movie.original_title}</MovieTitle>
                                 </WrapperContent>
                              </WrapperDescription>
                        </Wrapper>
                    </MovieItem>
                </CustomLink>
            ))}
        </MovieListContainer>
        <BackToTop/>
        </>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            original_title: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
export default MovieList;