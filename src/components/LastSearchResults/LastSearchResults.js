import { useContext } from 'react';

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
            <>
                <h2>Last search results</h2>
                <p>No search performed</p>
            </>
        );
    }

    return (
        <>
            <h2>Last search results</h2>
            <ul>
                {lastSearchResults.map(({code}, index) => (
                    <li key={index} onClick={() => onClick(index)}>
                        {code}
                    </li>
                ))}
            </ul>
        </>
    );
};


export default LastSearchResults;
