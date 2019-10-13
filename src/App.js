import React, {useState} from 'react';

function App() {
    return (
        <>
          <NavBar/>
        </>
    );
}

export default App;

const NavBar = () => {
    const [hidden, setHidden] = useState(true);

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
                        <MenuLink label="Home"/>
                    </div>
                    {/*Right Side only takes space it needs*/}
                    <div>
                        {/* TODO: Authenticated vs Not */}
                        <MenuLink label="Sign In"/>
                    </div>
                </div>
            </nav>
        </section>
    )
};

const Hamburger = ({clickHandler}) => {
    return (
        <button
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
            onClick={clickHandler}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
        </button>
    )
};

// TODO: Change to be a <Link> from React Router
const MenuLink = ({label}) => {
    return (
        <a href="#responsive-header"
           className="block mt-4 sm:inline-block sm:mt-0 text-white ml-2">
            {label}
        </a>
    )
};
