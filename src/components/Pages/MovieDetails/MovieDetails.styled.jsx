import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

export const BackButton = styled(Link)`
margin-top: 20px; 
margin-bottom: 20px;
display: inline-block;
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
font-weight: 500;
color: white;
background-color: darkblue;

&&:hover,
&&:focus{
    color: darkblue;
    background-color: blue;

}
`;

export const MovieWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;

export const ImgWrapper = styled.div`
margin-right: 30px;
Img {
width: 560px;
max-width: initial;
border-radius: 10px;
}
`;

export const Title = styled.p`
font-size: 16px;
font-weight: 500;
margin: 10px 10px 10px 0;
`;

export const Overview = styled.p`
font-size: 16px;
font-weight: 500;
margin: 10px 10px 10px 0;
text-align: justify;
overFlow-y: auto;
height: 150px;
background-color: mediumaquamarine;
border-radius: 8px;
`;

export const Li = styled.li`
font-size: 16px;
font-weight: 500;
margin: 10px 10px 10px 0;
`;

export const TitleHead = styled.h2`
text-align: center;
margin-top: 50px;
margin-bottom: 20px;
font-weight: bold;
`;

export const RouterLink = styled(Link)`
display: flex;
justify-content: center;
font-weight: bold;
margin-bottom: 10px;
margin-left: 100px;
padding: 10px;
border-radius: 6px;
width: 600px;
height: 50px;
color: white;
background-color: darkblue;

&&:hover,
&&:focus{
    color: darkblue;
    background-color: whitesmoke;
    border: 2px solid black;
}
`;