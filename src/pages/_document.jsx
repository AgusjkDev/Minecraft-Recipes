import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Minecraft Recipes includes all the recipes of Minecraft 1.19.1 with an amazing items search bar for those you want to find!"
                />
                <meta
                    name="keywords"
                    content="Minecraft, Mine, Craft, Recipe, Recipes, 1.19, 1.19.1, Warden, Wild Update, Java Edition, Bedrock Edition"
                />
                <meta property="og:title" content="Minecraft Recipes" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://minecraft-recipes.vercel.app" />
                <meta
                    property="og:description"
                    content="Minecraft Recipes includes all the recipes of Minecraft 1.19.1 with an amazing items search bar for those you want to find!"
                />
                <meta
                    name="og:image"
                    content="https://raw.githubusercontent.com/ShadeDev7/Minecraft-Recipes/main/.github/preview-image.png"
                />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1080" />
                <meta property="og:site_name" content="MinecraftRecipes" />
                <meta name="msapplication-TileImage" content="/favicon.png" />
                <link rel="apple-touch-icon" sizes="96x96" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            </Head>

            <body>
                <Main />

                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
