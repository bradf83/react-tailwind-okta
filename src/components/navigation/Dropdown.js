import React, {useCallback, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useClickOutside} from "../hooks/useClickOutside";

export const Dropdown = ({userName, children}) => {
    const [open, setOpen] = useState(false);
    const wrapperNode = useRef(null);

    const clickOutSideCallback = useCallback(() => setOpen(false), []);
    useClickOutside(wrapperNode, clickOutSideCallback);

    const openClass = open ? '' : 'hidden';
    return (
        <div className="relative" ref={wrapperNode}>
            <span className="block text-white cursor-pointer" onClick={() => setOpen(current => !current)}>{userName}</span>
            <div className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl ${openClass}`}>
                {children}
            </div>
        </div>
    )
};

export const DropdownLink = ({to, children}) =>
    <NavLink to={to} className="block px-4 py-2 text-gray-800 hover:bg-teal-700 hover:text-white">{children}</NavLink>;