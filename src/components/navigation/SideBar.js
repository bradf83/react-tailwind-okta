import React from 'react';

// Not currently used
const SideBar = ({showSideMenu}) => {
    const display = showSideMenu ? '' : 'hidden';
    return (
        <div className={`fixed bg-black border-white border-dashed border-2 h-screen w-1/6 ${display}`}>

        </div>
    )
};

export default SideBar;