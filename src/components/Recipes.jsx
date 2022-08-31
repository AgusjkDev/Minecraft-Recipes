import { memo, useRef, useEffect } from "react";

import { useResults, useItemRecipes } from "../hooks";
import { variableRecipes } from "../data";
import { Recipe, AnimatedRecipe } from "./Recipe";

const Recipes = ({ search, resultsQuantity, setResultsQuantity }) => {
    const lastRecipeRef = useRef();

    const { results, resultsLength } = useResults(search);
    const { itemRecipes } = useItemRecipes(results, resultsQuantity);

    useEffect(() => {
        if (!lastRecipeRef.current || itemRecipes.length < resultsQuantity) return;

        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setResultsQuantity(resultsQuantity + 25);
                }
            },
            { rootMargin: "1000px" }
        );

        observer.observe(lastRecipeRef.current);

        return () => observer.disconnect();
    });

    return (
        <div className="flex w-[90%] flex-col items-center gap-4 lg:w-[85%] 2xl:w-3/4">
            <p className="w-full rounded bg-neutral-200 py-3 text-center">{`${resultsLength} ${
                resultsLength === 1 ? "result" : "results"
            } found`}</p>

            <div className="flex flex-wrap gap-4">
                {itemRecipes.map(({ tag, recipes }, itemRecipesIndex) => {
                    const isAnimatedRecipe = variableRecipes.includes(tag);
                    const isLastRecipe = itemRecipes.length - 1 === itemRecipesIndex;

                    return recipes.map((recipe, recipeIndex) => {
                        const props = {
                            key: recipeIndex,
                            tag,
                            ...recipe,
                            ...(isLastRecipe && { lastRecipeRef }),
                        };

                        return !isAnimatedRecipe ? (
                            <Recipe {...props} />
                        ) : (
                            <AnimatedRecipe {...props} />
                        );
                    });
                })}
            </div>
        </div>
    );
};

export default memo(Recipes);
