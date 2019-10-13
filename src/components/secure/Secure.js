import React from 'react';
import {AuthContext} from "../authentication/Auth";
import Loading from "../loading/Loading";

const Secure = () => {
    const auth = React.useContext(AuthContext);
    if(auth.loading){
        return <Loading/>
    }
    return (
        <div>Welcome to the secure area: {auth.user.name}</div>
    )
};

export default Secure;