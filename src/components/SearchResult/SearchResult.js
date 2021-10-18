import './SearchResult.scss';


const SearchResult = ( {isDecoding, decodedVinData} ) => {
    const {data, message, isLoaded, isError} = decodedVinData;

    if ( isDecoding ) {
        return (
            <div className="search-result">
                <h2 className="search-result__title">Decoded VIN data</h2>
                <p>Decoding...</p>
            </div>
        );
    }

    if ( isError ) {
        return (
            <div className="search-result">
                <h2 className="search-result__title">Decoded VIN data</h2>
                <p>Something went wrong. Please try again later.</p>
            </div>
        );
    }

    if ( !isLoaded ) {
        return (
            <div className="search-result">
                <h2 className="search-result__title">Decoded VIN data</h2>
            </div>
        );
    }

    if ( data.length === 0 ) {
        return (
            <div className="search-result">
                <h2 className="search-result__title">Decoded VIN data</h2>
                <p>No data for this VIN</p>
            </div>
        );
    }

    return (
        <div className="search-result">
            <h2 className="search-result__title">Decoded VIN data</h2>
            <p>{message}</p>
            <table className="result-table">
                <thead>
                    <tr className="result-table__header-row">
                        <th className="result-table__header-cell">Variable name</th>
                        <th className="result-table__header-cell">Variable description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({Value: description, Variable: name, VariableId: id}) => (
                        <tr key={id} className="result-table__row">
                            <td className="result-table__cell">{name}</td>
                            <td className="result-table__cell">{description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default SearchResult;
