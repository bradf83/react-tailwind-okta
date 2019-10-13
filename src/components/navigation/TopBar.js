import React, {useContext, useState} from 'react';
import {AuthContext} from "../authentication/Auth";
import TopBarLink from "./TopBarLink";
import Hamburger from "./Hamburger";
import {NavLink} from "react-router-dom";
import Dropdown from "./Dropdown";

const TopBar = () => {
    const [hidden, setHidden] = useState(true);
    const auth = useContext(AuthContext);

    const userAuthenticated = auth.user !== null && auth.user !== undefined;
    const smallNavHidden = hidden ? 'hidden' : '';
    return (
        <section>
            <nav className="flex items-center justify-between flex-wrap bg-black p-3">
                {/*Brand*/}
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">React Tailwind</span>
                </div>

                {/*Hamburger*/}
                <div className="block sm:hidden">
                    <Hamburger clickHandler={() => setHidden(current => !current)} />
                </div>

                {/*Menu Content*/}
                <div className={`w-full block flex-grow sm:flex sm:items-center sm:w-auto ${smallNavHidden}`}>
                    {/*Left Side Grows*/}
                    <div className="text-sm sm:flex-grow">
                        <TopBarLink to="/" exact={true} label="Home"/>
                        <TopBarLink to="/public" exact={true} label="Public"/>
                        <TopBarLink to="/secure" exact={true} label="Secure"/>
                    </div>
                    {/*Right Side only takes space it needs*/}
                    <div>
                        {userAuthenticated && (
                            <Dropdown userName={auth.user.name}>
                                <NavLink to="/logout" className="block px-4 py-2 text-gray-800 hover:bg-teal-700 hover:text-white">Sign Out</NavLink>
                            </Dropdown>
                        )}
                        {!userAuthenticated && (
                            <TopBarLink to="/secure" label="Sign In"/>
                        )}
                    </div>
                </div>
            </nav>
        </section>
    )
};

export default TopBar;


