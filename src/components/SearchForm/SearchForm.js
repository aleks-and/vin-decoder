import { useContext } from 'react';

import { decodeVin } from '../../api';
import { isInputValid } from './tools';
import './SearchForm.scss';

import { LastSearchResultsContext } from '../../App';


const SearchForm = ({
    isDecoding,
    setIsDecoding,
    setDecodedVinData,
    decodedVinData,
    searchInput,
    setSearchInput,
    previousVinCode,
    setPreviousVinCode
}) => {
    const {setLastSearchResults} = useContext(LastSearchResultsContext);

    const onSubmit = async event => {
        event.preventDefault();

        const isInputFieldValid = isInputValid(searchInput.value);

        setSearchInput({
            ...searchInput,
            isValid: isInputFieldValid
        });

        if (
            !isInputFieldValid
            || previousVinCode === searchInput.value
        ) {
            return;
        }

        setIsDecoding(true);
        setPreviousVinCode(searchInput.value);

        try {
            const {Results: data, Message: message} = await decodeVin(searchInput.value);
            const filteredData = data.filter(( {Value: description} ) => description !== null && description !== '');

            setDecodedVinData({
                isError: false,
                isLoaded: true,
                data: filteredData,
                code: searchInput.value,
                message
            });

            setLastSearchResults(previousState => [
                {data: filteredData, message, code: searchInput.value},
                ...previousState.slice(0, 4)
            ]);
        } catch {
            setDecodedVinData({
                ...decodedVinData,
                isError: true,
                isLoaded: false,
            })
        } finally {
            setIsDecoding(false);
        }
    };

    const onChange = event => {
        setSearchInput({
            isValid: true,
            value: event.target.value
        })
    };

    return (
        <div className="search-form">
            <h2 className="search-form__title">Search</h2>
            <form className="search-form__form" onSubmit={event => onSubmit(event)}>
                <input
                    value={searchInput.value}
                    onChange={onChange}
                    type="text"
                    placeholder="Enter VIN to decode"
                    maxLength="17"
                    className="search-form__input"
                />
                <button
                    type="submit"
                    disabled={isDecoding}
                    className="search-form__button"
                >
                    {isDecoding ? 'Decoding...' : 'Decode'}
                </button>
            </form>
            {!searchInput.isValid && (
                <span className="search-form__error">17 characters (A-Z & 0-9)</span>
            )}
        </div>
    )
};


export default SearchForm;
