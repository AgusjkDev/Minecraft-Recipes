import { useState, useEffect } from "react";

import { Header, SearchBar, Recipes, Footer } from "../components";
import { trimAll } from "../utils";

const Index = () => {
    const [search, setSearch] = useState("");
    const [resultsQuantity, setResultsQuantity] = useState(0);

    useEffect(() => {
        setResultsQuantity(25);
    }, [search, setResultsQuantity]);

    return (
        <>
            <Header />

            <main className="py-8 w-full min-h-[calc(100vh-8.5rem)] flex flex-col items-center gap-4">
                <SearchBar search={search} setSearch={setSearch} />

                <Recipes
                    search={trimAll(search).toLowerCase()}
                    resultsQuantity={resultsQuantity}
                    setResultsQuantity={setResultsQuantity}
                />
            </main>

            <Footer />
        </>
    );
};

export default Index;
