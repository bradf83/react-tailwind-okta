import React, {useEffect, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";

// TODO: Extract custom hook or look for one to use that does this already.
export const Dropdown = ({userName, children}) => {
    const [open, setOpen] = useState(false);
    const node = useRef(null);

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    const openClass = open ? '' : 'hidden';
    return (
        <div className="relative" ref={node}>
            <span className="block text-white cursor-pointer" onClick={() => setOpen(current => !current)}>{userName}</span>
            <div className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl ${openClass}`}>
                {children}
            </div>
        </div>
    )
};

export const DropdownLink = ({to, children}) =>
    <NavLink to={to} className="block px-4 py-2 text-gray-800 hover:bg-teal-700 hover:text-white">{children}</NavLink>;