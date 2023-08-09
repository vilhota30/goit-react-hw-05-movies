import styled from '@emotion/styled';

export const List = styled.ul`
padding-bottom: 20px;
margin-top: 20px;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
gap: 16px;
border-bottom: 2px solid black;
`;

export const ActorItem = styled.li`
background-color: cornflowerblue;
border: 3px solid darkblue;
border-radius: 8px;
&&:hover,
&&:focus{
    cursor: pointer;
    box-shadow: 0 2px 4px 2px grey;
    transform: scale(1.07);
}
`;

export const Title = styled.p`
margin-top: 20px;
font-weight: bold;
font-size: 18px;
border: 2px solid darkblue;
border-radius: 10px;
color: white;
background-color: darkblue;
padding: 10px;
text-decoration: wavy;

&&:hover,
&&:focus{
    color: darkblue;
    background-color:  white;
}
`; 