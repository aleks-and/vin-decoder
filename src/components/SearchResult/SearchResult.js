const SearchResult = ( {isDecoding, decodedVinData} ) => {
    const {data, message, isLoaded, isError} = decodedVinData;

    if ( isDecoding ) {
        return (
            <>
                <h2>Decoded VIN data</h2>
                <p>Decoding...</p>
            </>
        );
    }

    if ( isError ) {
        return (
            <>
                <h2>Decoded VIN data</h2>
                <p>Something went wrong. Please try again later.</p>
            </>
        );
    }

    if ( !isLoaded ) {
        return <h2>Decoded VIN data</h2>;
    }

    if ( data.length === 0 ) {
        return (
            <>
                <h2>Decoded VIN data</h2>
                <p>No data for this VIN</p>
            </>
        );
    }

    return (
        <>
            <h2>Decoded VIN data</h2>
            <p>{message}</p>
            <table>
                <thead>
                    <tr>
                        <th>Variable name</th>
                        <th>Variable description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({Value: description, Variable: name, VariableId: id}) => (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};


export default SearchResult;
