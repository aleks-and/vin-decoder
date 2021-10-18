import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { getVinVariables } from '../../api';
import prepareHTML from '../../utils/prepare.HTML';
import './Variables.scss';

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
            <main className="main">
                <div className="main__inner">
                    <div className="variables">
                        <h1 className="variables__title">Variable list</h1>
                        <p>Loading...</p>
                    </div>
                </div>
            </main>
        );
    }

    if ( isError ) {
        return (
            <main className="main">
                <div className="main__inner">
                    <div className="variables">
                        <h1 className="variables__title">Variable list</h1>
                        <p>Something went wrong. Please try again later.</p>
                    </div>
                </div>
            </main>
        );
    }

    if ( variables.length === 0 ) {
        return (
            <main className="main">
                <div className="main__inner">
                    <div className="variables">
                        <h1 className="variables__title">Variable list</h1>
                        <p>The variable list is empty.</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="main">
            <div className="main__inner">
                <div className="variables">
                    <h1 className="variables__title">Variable list</h1>
                    <dl className="variable-list">
                        {variables.map(({ID: id, Name: name, Description: description}) => (
                            <React.Fragment key={id}>
                                <dt className="variable-list__title">
                                    <Link className="variable-list__title-link" to={`/variables/${id}`}>
                                        {name}
                                    </Link>
                                </dt>
                                <dd className="variable-list__description" dangerouslySetInnerHTML={prepareHTML(description)} />
                            </React.Fragment>
                        ))}
                    </dl>
                </div>
            </div>
        </main>
    );
};


export default Variables;
