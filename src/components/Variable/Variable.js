import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getVinVariables } from '../../api';
import prepareHTML from '../../utils/prepare.HTML';
import routes from '../../constants/routes';

import { IsVariablesLoadedContext, VariablesContext } from '../../App';


const Variable = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [variable, setVariable] = useState(null);

    const { isVariablesLoaded, setIsVariablesLoaded } = useContext(IsVariablesLoadedContext);
    const { variables, setVariables } = useContext(VariablesContext);

    const {id} = useParams();

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
                } catch {
                    setIsError(true);
                } finally {
                    setIsLoading(false);
                }
            }

            fetchData();
        }
    });

    useEffect(() => {
        setVariable(variables.find(variable => variable.ID === Number(id)));
    }, [variable, variables, id]);

    if ( isLoading ) {
        return (
            <>
                <h1>Variable description</h1>
                <p>Loading...</p>
            </>
        );
    }

    if ( isError ) {
        return (
            <>
                <h1>Variable description</h1>
                <p>Something went wrong. Please try again later.</p>
            </>
        );
    }

    if ( !variable ) {
        return (
            <>
                <h1>Variable description</h1>
                <p>Variable not found</p>
            </>
        );
    }

    return (
        <>
            <h1>Variable description</h1>
            <dl>
                <dt>{variable.Name}</dt>
                <dd dangerouslySetInnerHTML={prepareHTML(variable.Description)} />
            </dl>
            <p>
                <Link to={routes.VARIABLES}>Back to list</Link>
            </p>
        </>
    );
};


export default Variable;
