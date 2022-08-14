import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Minecraft Recipes</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Agustín Arnoldi" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
