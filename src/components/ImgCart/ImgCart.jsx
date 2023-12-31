import PropTypes from 'prop-types';

const ImgCart = ({img}) => {
    const image = img !== null && img !== undefined
     ? `https://image.tmdb.org/t/p/original${img}` 
     : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';
   
    return <img src={image} alt="Movie Poster" width="350" height="350"/>;
};

ImgCart.propTypes = {
    img: PropTypes.string,
};

export default ImgCart;