import { useState } from 'react';

import SearchForm from '../SearchForm';
import SearchResult from '../SearchResult';
import LastSearchResults from '../LastSearchResults';

import './Home.scss';


const Home = () => {
    const [isDecoding, setIsDecoding] = useState(false);
    const [decodedVinData, setDecodedVinData] = useState({
        data: [],
        message: null,
        code: null,
        isLoaded: false,
        isError: false
    });

    const [searchInput, setSearchInput] = useState({
        value: '',
        isValid: true
    });

    const [previousVinCode, setPreviousVinCode] = useState(searchInput.value);

    return (
        <main className="main">
            <div className="main__inner">
                <article className="vin-decoder">
                    <h1 className="vin-decoder__title">VIN decoder</h1>
                    <section className="vin-decoder__search-form">
                        <SearchForm
                            isDecoding={isDecoding}
                            setIsDecoding={setIsDecoding}
                            decodedVinData={decodedVinData}
                            setDecodedVinData={setDecodedVinData}
                            searchInput={searchInput}
                            setSearchInput={setSearchInput}
                            previousVinCode={previousVinCode}
                            setPreviousVinCode={setPreviousVinCode}
                        />
                    </section>
                    <aside className="vin-decoder__last-search">
                        <LastSearchResults
                            decodedVinData={decodedVinData}
                            setDecodedVinData={setDecodedVinData}
                            setSearchInput={setSearchInput}
                            setPreviousVinCode={setPreviousVinCode}
                        />
                    </aside>
                    <section className="vin-decoder__search-result">
                        <SearchResult
                            isDecoding={isDecoding}
                            decodedVinData={decodedVinData}
                        />
                    </section>
                </article>
            </div>
        </main>
    );
};


export default Home;
