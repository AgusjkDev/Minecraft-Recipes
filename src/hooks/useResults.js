import { useState, useEffect } from "react";

import { recipesList } from "../data";

const useResults = search => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        setResults(
            recipesList
                .filter(recipe => recipe.name.toLowerCase().includes(search))
                .map(recipe => recipe.tag)
        );
    }, [search, setResults]);

    return { results, resultsLength: results.length };
};

export default useResults;
