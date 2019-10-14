import React from 'react';
import MainContentContainer from "../layout/MainContentContainer";

const Loading = () => {
    return (
        <MainContentContainer>
            <div className="bg-blue-200 rounded py-2 px-2">
                <p><em>Loading...</em></p>
            </div>
        </MainContentContainer>
    )
};

export default Loading;