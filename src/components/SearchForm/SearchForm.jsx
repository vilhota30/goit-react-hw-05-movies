import React, {useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Button, FormContainer, Input, Span} from './SearchForm.styled';

const SearchForm = () => {
    const [searchValue, serSearchValue] = useState('');
    const [, setSearchParams] = useSearchParams();

    const handleSubmit = event => {
        event.preventDefault();

        if (searchValue.trim().length > 2) {
            setSearchParams({query: searchValue});
        }
    };

    
    const handleChange = event => {
        setSearchParams(event.target.value);
    }



    return (
        <FormContainer>
            <Input
               type='text'
               name='serach'
               placeholder='Enter movie title'
               value={searchValue}
               onChange={handleChange}
               required
               minLength={2}            
            />
            <Button type='submit'><Span>&#128269;</Span></Button>
        </FormContainer>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;