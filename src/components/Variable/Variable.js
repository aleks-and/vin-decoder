import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getVinVariables } from '../../api';
import prepareHTML from '../../utils/prepare.HTML';
import routes from '../../constants/routes';
import './Variable.scss';

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
            <main className="main">
                <div className="main__inner">
                    <div className="variable">
                        <h1 className="variable__title">Variable description</h1>
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
                    <div className="variable">
                        <h1 className="variable__title">Variable description</h1>
                        <p>Something went wrong. Please try again later.</p>
                    </div>
                </div>
            </main>
        );
    }

    if ( !variable ) {
        return (
            <main className="main">
                <div className="main__inner">
                    <div className="variable">
                        <h1 className="variable__title">Variable description</h1>
                        <p>Variable not found</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="main">
            <div className="main__inner">
                <div className="variable">
                    <h1 className="variable__title">Variable description</h1>
                    <dl className="variable-list">
                        <dt className="variable-list__title">{variable.Name}</dt>
                        <dd className="variable-list__description" dangerouslySetInnerHTML={prepareHTML(variable.Description)} />
                    </dl>
                    <p>
                        <Link to={routes.VARIABLES}>Back to list</Link>
                    </p>
                </div>
            </div>
        </main>
    );
};


export default Variable;
