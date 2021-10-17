import { useState } from 'react';

import SearchForm from '../SearchForm';
import SearchResult from '../SearchResult';
import LastSearchResults from '../LastSearchResults';


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
        <main>
            <article>
                <h1>VIN decoder</h1>
                <section>
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
                <aside>
                    <LastSearchResults
                        decodedVinData={decodedVinData}
                        setDecodedVinData={setDecodedVinData}
                        setSearchInput={setSearchInput}
                        setPreviousVinCode={setPreviousVinCode}
                    />
                </aside>
                <section>
                    <SearchResult
                        isDecoding={isDecoding}
                        decodedVinData={decodedVinData}
                    />
                </section>
            </article>
        </main>
    );
};


export default Home;
