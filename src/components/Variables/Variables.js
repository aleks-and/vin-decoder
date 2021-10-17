import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { getVinVariables } from '../../api';
import prepareHTML from '../../utils/prepare.HTML';

import { IsVariablesLoadedContext, VariablesContext } from '../../App';


const Variables = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const { isVariablesLoaded, setIsVariablesLoaded } = useContext(IsVariablesLoadedContext);
    const { variables, setVariables } = useContext(VariablesContext);

    useEffect(() => {
        if (
            !isVariablesLoaded
            && !isLoading
            && !isError
        ) {
            async function fetchData () {
                setIsLoading(true);
                setIsError(false);

                try {
                    const {Results: data} = await getVinVariables();

                    setVariables(data);
                    setIsVariablesLoaded(true);
                } catch ( {message} ) {
                    setIsError(true);
                } finally {
                    setIsLoading(false);
                }
            }

            fetchData();
        }
    });

    if ( isLoading ) {
        return (
            <>
                <h1>Variable list</h1>
                <p>Loading...</p>
            </>
        );
    }

    if ( isError ) {
        return (
            <>
                <h1>Variable list</h1>
                <p>Something went wrong. Please try again later.</p>
            </>
        );
    }

    if ( variables.length === 0 ) {
        return (
            <>
                <h1>Variable list</h1>
                <p>The variable list is empty.</p>
            </>
        );
    }

    return (
        <>
            <h1>Variable list</h1>
            <dl>
                {variables.map(({ID: id, Name: name, Description: description}) => (
                    <React.Fragment key={id}>
                        <dt>
                            <Link to={`/variables/${id}`}>
                                {name}
                            </Link>
                        </dt>
                        <dd dangerouslySetInnerHTML={prepareHTML(description)} />
                    </React.Fragment>
                ))}
            </dl>
        </>
    );
};


export default Variables;
