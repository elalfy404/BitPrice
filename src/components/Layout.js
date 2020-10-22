import Head from "next/head";

import Navbar from "./Navbar";
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
                />
                <title>BitPrice</title>
            </Head>
            <Navbar />

            <main className="container">{children}</main>
        </>
    );
};

export default Layout;
