import Image from "next/image";

import { useItemData } from "../hooks";

const Item = ({ item }) => {
    const { name, icon } = useItemData(item);

    return <Image alt={name} src={`data:image/png;base64,${icon}`} width="32px" height="32px" />;
};

export default Item;
