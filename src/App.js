import React from 'react';

function App() {
    return (
        <>
            <section>
                <nav className="flex items-center justify-between flex-wrap bg-black p-2">
                    <div className="flex items-center flex-shrink-0 text-white pr-2 my-1">
                        <span className="font-semibold text-xl tracking-tight">React Tailwind</span>
                    </div>

                    {/*Hamburger Menu < 640px */}
                    <div className="block sm:hidden">
                        <button
                            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
                            onClick={() => window.alert('Hello')}>
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>

                    {/* Content Between Shown > 640px */}
                    <div className="hidden sm:block flex-grow bg-yellow-500 mr-2">a</div>

                    {/*Sign In Button > 640px */}
                    <button
                       className="hidden text-sm sm:block px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white">Sign In</button>

                {/*  TODO: Some sort of block of nav items, hidden and shown with hamburger  */}
                </nav>
            </section>
        </>
    );
}

export default App;
