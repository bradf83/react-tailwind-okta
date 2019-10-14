import React from 'react';
import {AuthContext} from "../authentication/Auth";
import Loading from "../loading/Loading";
import MainContentContainer from "../layout/MainContentContainer";

const Secure = () => {
    const auth = React.useContext(AuthContext);
    if(auth.loading){
        return <Loading/>
    }
    return (
        <MainContentContainer>
            <h1 className="font-bold text-xl mb-2">
                Welcome <em>{auth.user.name}</em>
            </h1>

            <div className="bg-blue-200 rounded py-2 px-2">
                <p>Welcome to your dashboard. <em>More Coming soon!</em></p>
            </div>
        </MainContentContainer>
    )
};

export default Secure;