import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Variables from './components/Variables';
import NotFound from './components/NotFound';
import Variable from './components/Variable';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

import routes from './constants/routes';

export const IsVariablesLoadedContext = React.createContext(null);
export const VariablesContext = React.createContext(null);
export const LastSearchResultsContext = React.createContext(null);


const App = () => {
    const [isVariablesLoaded, setIsVariablesLoaded] = useState(false);
    const [variables, setVariables] = useState([]);
    const [lastSearchResults, setLastSearchResults] = useState([]);

    return (
        <>
            <ScrollToTop />
            <LastSearchResultsContext.Provider value={{
                lastSearchResults,
                setLastSearchResults
            }}>
                <VariablesContext.Provider value={{
                    variables,
                    setVariables
                }}>
                    <IsVariablesLoadedContext.Provider value={{
                        isVariablesLoaded,
                        setIsVariablesLoaded
                    }}>
                        <Header />
                        <Switch>
                            <Route path={routes.MAIN} exact>
                                <Home />
                            </Route>
                            <Route path={routes.VARIABLES} exact>
                                <Variables />
                            </Route>
                            <Route path={routes.VARIABLE} exact>
                                <Variable />
                            </Route>
                            <Route path='*'>
                                <NotFound />
                            </Route>
                        </Switch>
                    </IsVariablesLoadedContext.Provider>
                </VariablesContext.Provider>
            </LastSearchResultsContext.Provider>
        </>
    )
};


export default App;
