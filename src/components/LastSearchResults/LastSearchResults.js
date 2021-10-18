import { useContext } from 'react';

import './LastSearchResults.scss';

import { LastSearchResultsContext } from '../../App';


const LastSearchResults = ({
   setDecodedVinData,
   decodedVinData,
   setSearchInput,
   setPreviousVinCode
}) => {
    const {lastSearchResults} = useContext(LastSearchResultsContext);

    const onClick = index => {
        const currentVinCode = lastSearchResults[index].code;

        if ( decodedVinData.code === currentVinCode ) {
            return;
        }

        setDecodedVinData({
            isError: false,
            isLoaded: true,
            ...lastSearchResults[index]
        });

        setPreviousVinCode(currentVinCode);
        setSearchInput({
            value: currentVinCode,
            isValid: true
        });
    };

    if ( lastSearchResults.length === 0 ) {
        return (
            <div className="last-search">
                <h2 className="last-search__title">Last search results</h2>
                <p>No search performed</p>
            </div>
        );
    }

    return (
        <div className="last-search">
            <h2 className="last-search__title">Last search results</h2>
            <ul className="last-search__list">
                {lastSearchResults.map(({code}, index) => {
                    const className = `last-search__list-item${decodedVinData.code === code ? ' last-search__list-item--active' : ''}`;

                    return (
                        <li
                            className={className}
                            key={index}
                            onClick={() => onClick(index)}
                        >
                            {code}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};


export default LastSearchResults;
