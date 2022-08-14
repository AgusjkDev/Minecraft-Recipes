import { useState, useEffect } from "react";

import { recipes } from "../data";

const useItemRecipes = (results, resultsQuantity) => {
    const [itemRecipes, setResultRecipes] = useState([]);

    useEffect(() => {
        setResultRecipes(
            results
                .slice(0, resultsQuantity)
                .map(itemTag => ({ tag: itemTag, recipes: recipes[itemTag] }))
        );
    }, [results, resultsQuantity, setResultRecipes]);

    return { itemRecipes };
};

export default useItemRecipes;
