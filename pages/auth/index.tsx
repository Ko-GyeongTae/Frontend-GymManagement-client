import React from "react";
import AuthHeader from "../../src/components/AuthHeader";

const Home = ({Component, pageProps}) => {

    return (
        <div>
            <AuthHeader />
            <Component {...pageProps} />
        </div>
    )
}
export default Home;