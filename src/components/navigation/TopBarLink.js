import React from 'react';
import {NavLink} from "react-router-dom";

// TODO: Active class.  Currently adding `active` but doing nothing
//  custom component extraction in Tailwind?
const TopBarLink = ({to, exact = false, label}) => {
    return (
        <NavLink to={to} exact={exact} className="block mt-4 sm:inline-block sm:mt-0 text-white ml-2">
            {label}
        </NavLink>
    )
};

export default TopBarLink;