import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {Button, Container, Title} from './ErrorMessage.styled';

const ErrorMessage = ({error}) => {
    const showErrorToast = () => {
        toast.error(
            <>
            Oops, something went wrong ... 
            <br/>
            Plase, try agan later.
            <br/>
            Error: {error}
            </>,{
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                toastId: 'error-toast',
            });
    };

    return(
        <Container>
            <Title>Sorry, but something went wrong...</Title>
            <Button onClick={showErrorToast}>Show Error Toast</Button>
        </Container>
    );
}

ErrorMessage.PropTypes = {
    error: PropTypes.string.isRequired,
};

export default ErrorMessage;