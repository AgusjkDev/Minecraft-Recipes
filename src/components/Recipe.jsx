import { memo } from "react";
import Image from "next/image";

import { items, variableItems } from "../data";
import Item from "./Item";

const RecipeStructure = ({ tag, count, crafting, lastRecipeRef }) => {
    return (
        <div
            {...(lastRecipeRef && { ref: lastRecipeRef })}
            className="relative mx-auto flex h-[160px] w-[320px] items-center justify-center"
        >
            <div className="absolute z-[1] flex h-[87%] w-[94%] items-center justify-between">
                <div className="grid h-full w-[44.5%] grid-rows-3">
                    {crafting.pattern.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid w-full grid-cols-3">
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

                <div className="flex h-[44.5%] w-[20%] items-center justify-center">
                    <Item item={items[tag]} />

                    <span className="font-minecraft text-shadow absolute flex h-[2.75rem] w-9 items-end justify-end text-white">
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
