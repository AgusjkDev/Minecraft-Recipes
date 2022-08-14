import { useState, useEffect } from "react";

const useItemData = item => {
    const [itemData, setItemData] = useState({ name: "", icon: "" });

    useEffect(() => {
        if (!Array.isArray(item)) return setItemData(item);

        setItemData(item[0]);

        let itemIndex = 1;

        const interval = setInterval(() => {
            setItemData(item[itemIndex]);

            itemIndex = itemIndex === item.length - 1 ? 0 : itemIndex + 1;
        }, 1500);

        return () => clearInterval(interval);
    }, [item, setItemData]);

    return { ...itemData };
};

export default useItemData;
