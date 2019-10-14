import React from 'react';
import MainContentContainer from "../layout/MainContentContainer";

const Public = () => {
    return (
        <MainContentContainer>
            <h1 className="font-bold text-xl mb-2">
                Public Homepage
            </h1>

            <div className="bg-blue-200 rounded py-2 px-2">
                <p>Welcome to the public homepage, it needs some work. <em>Coming soon!</em></p>
            </div>
        </MainContentContainer>
    )
};

export default Public;