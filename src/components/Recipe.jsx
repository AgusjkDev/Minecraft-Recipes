import { memo } from "react";
import Image from "next/image";

import { items, variableItems } from "../data";
import Item from "./Item";

const RecipeStructure = ({ tag, count, crafting, lastRecipeRef }) => {
    return (
        <div
            {...(lastRecipeRef && { ref: lastRecipeRef })}
            className="mx-auto relative w-[320px] h-[160px] flex items-center justify-center"
        >
            <div className="absolute z-[1] w-[94%] h-[87%] flex items-center justify-between">
                <div className="w-[44.5%] h-full grid grid-rows-3">
                    {crafting.pattern.map((row, rowIndex) => (
                        <div key={rowIndex} className="w-full grid grid-cols-3">
                            {row.map((key, keyIndex) => {
                                const itemTag = crafting.keys[key];

                                return (
                                    <div
                                        key={keyIndex}
                                        className="flex items-center justify-center"
                                    >
                                        {key !== " " && (
                                            <Item
                                                item={
                                                    items[itemTag] ||
                                                    variableItems[itemTag].map(item => items[item])
                                                }
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                <div className="w-[20%] h-[44.5%] flex items-center justify-center">
                    <Item item={items[tag]} />

                    <span className="absolute w-9 h-[2.75rem] flex items-end justify-end font-minecraft text-white text-shadow">
                        {count > 1 && count}
                    </span>
                </div>
            </div>

            <Image alt="Crafting Table" src="/imgs/crafting-table.jpg" layout="fill" priority />
        </div>
    );
};

/*
    We export them like this to sync the animations
    in those recipes that have many possible craftings.
*/
const Recipe = memo(RecipeStructure);
const AnimatedRecipe = RecipeStructure;

export { Recipe, AnimatedRecipe };
