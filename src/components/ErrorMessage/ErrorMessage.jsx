import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {Button, Container, Title} from './ErrorMessage.styled';

const ErrorMessage = ({error}) => {
    const showErrorToast = () => {
        toast.error(
            <>
            Make yourself a cup of tea
            <br/>
            We're already fixing this bug
            <br/>
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
            <Button onClick={showErrorToast} to='/'>Click me to find addition information about the error</Button>
        </Container>
    );
}

ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired,
};

export default ErrorMessage;