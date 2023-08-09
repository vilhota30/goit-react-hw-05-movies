import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import ImgCart from 'components/ImgCart/ImgCart';


export const MovieListContainer = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
width: 100%;
grid-gap: 16px;
list-style: none;
padding: 0;
margin-top: 30px;
`;

export const Wrapper = styled.div`
position: relative;
box-shadow: 0 2px 0 0 rgba(20, 1, 100, 0.6);
`;

export const CustomLink = styled(Link)`
text-decoration: none;
color: black;
font-weight: bold;

&&:hover,
&&:focus{
    color: blueviolet;
}
`; 

export const MovieItem = styled.li`
position: relative;
display: flex;
justify-content: center;
align-items: flex-start;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: transform 0.5s box-shadow 0.6s;
overflow: hidden;
border-radius: 14px;

&&:hover,
&&:focus{
    transform: scale(1.07);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 3px solid black;
}
`;

export const MovieImage = styled(ImgCart)`
width: 100%;
height: auto;
object-fit: cover;
`;

export const MovieTitle = styled.h2`
display: flex;
justify-content: center;
text-decoration: none;
color: black;
font-size: 16px;
padding: 5px;
`;

export const WrapperDescription = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 60px;
background-color: rgb(100, 149, 237, 0.8);
`;

export const WrapperContent = styled.div`
text-align: start;
margin-top: 8px;
background-color: darkblue;
color: whitesmoke;
border-radius: 15px;
`;
