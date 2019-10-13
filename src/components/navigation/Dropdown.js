import React, {useState} from 'react';

// TODO Enhance this so that if you click outside the drop down it closes.
//  Create a DropdownLink and DropdownButton component
const Dropdown = ({userName, children}) => {
    const [collapsed, setCollapsed] = useState(true);

    const isCollapsed = collapsed ? 'hidden' : '';
    return (
        <div className="relative">
            <span className="block text-white cursor-pointer" onClick={() => setCollapsed(current => !current)}>{userName}</span>
            <div className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl ${isCollapsed}`}>
                {children}
            </div>
        </div>
    )
};

export default Dropdown;