import fetch from "isomorphic-unfetch";
import Layout from "../src/components/Layout";
import Prices from "../src/components/Prices";
export default function Home({ bpi }) {
    return (
        <Layout>
            <div>
                <h1>Welcome to BitPrice</h1>
                <p>Check current Bitcoin rate</p>
                <Prices bpi={bpi} />
            </div>
        </Layout>
    );
}

Home.getInitialProps = async function () {
    const res = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await res.json();
    return {
        bpi: data.bpi,
    };
};
