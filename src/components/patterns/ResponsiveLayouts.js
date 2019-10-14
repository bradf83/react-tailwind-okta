import React from 'react';

// Playing around with some different layouts, learning tailwind, getting familiar with things.

const ResponsiveLayouts = () => {
    return (
        <>
            <div className="sm:flex mb-2">
                <div
                    className="mb-2 sm:mb-0 sm:mr-2 sm:w-1/4 bg-yellow-200 h-64 p-2 rounded-lg border-2 border-yellow-600 text-yellow-600">
                    <span className="font-extrabold text-2xl">WARNING</span>
                </div>
                <div className="sm:w-3/4">
                    <div className="bg-red-400 h-20 p-2 mb-2 rounded-lg border-2 border-red-700">
                        Test
                    </div>
                    <div className="bg-red-400 h-20 p-2 mb-2 rounded-lg border-2 border-red-700">
                        Test
                    </div>
                    <div className="bg-red-400 h-20 p-2 rounded-lg border-2 border-red-700">
                        Test
                    </div>
                </div>

            </div>

            <div className="bg-teal-500 rounded p-2 mb-2">
                Divider
            </div>

            <div className="sm:flex">
                <div className="w-full sm:w-1/3 bg-purple-500 rounded p-2 mr-0 sm:mr-2 mb-2 sm:mb-0">
                    1
                </div>
                <div className="w-full sm:w-1/3 bg-purple-500 rounded p-2 mr-0 sm:mr-2 mb-2 sm:mb-0">
                    2
                </div>
                <div className="w-full sm:w-1/3 bg-purple-500 rounded p-2">
                    3
                </div>
            </div>
        </>
    )
};

export default ResponsiveLayouts;