import styled from '@emotion/styled';

export const FormContainer = styled.form`
display: flex;
align-items: center;
`;

export const Input = styled.input`
padding: 10px;
font-size: 18px;
border: 2px solid grey;
border-radius: 4px;
width; 50%;
margin-right: 12px;

&&:hover,
&&:focus{
    outline: none;
    border: 3px dashed blue;
}
`;

export const Button = styled.button`
padding: 5px;
width; 50px;
font-size: 12px;
color: lateblueviolet;
background-color: darkblue;
border: none;
border-radius: 4px;
transition: background-color 0.3s ease;
box-shadow: 0 2px 4px 2px lightblue;

&&:hover,
&&:focus{
    color: blue;
    background-color: bluviolet;
}
`;

export const Span = styled.span`
font-size: 25px;
`;
