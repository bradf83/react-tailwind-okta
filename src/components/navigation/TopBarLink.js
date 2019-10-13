import React from 'react';
import {NavLink} from "react-router-dom";

const TopBarLink = ({to, exact = false, label}) => {
    return (
        <NavLink to={to} exact={exact} className="top-bar-link">
            {label}
        </NavLink>
    )
};

export default TopBarLink;