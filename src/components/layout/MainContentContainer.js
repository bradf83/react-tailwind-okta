import React from 'react';

const MainContentContainer = ({children}) => {
    return (
        <section className="mt-2">
            <div className="container mx-auto px-2">
                {children}
            </div>
        </section>
    )
};

export default MainContentContainer;