import * as React from 'react';
import {useLocation} from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

// Not passing default state here as the AuthProvider is intended to wrap the entire application.  This means there
// should be no consumer above this provider that would require the default state.
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [state, setState] = React.useState({
        loading: true,
        token: undefined, // Should this be null instead?
        user: null,
    });

    const updateAuth = async auth => {
        //TODO: I believe there is a bug here, something about user not logged in and not to prompt.
        // May need to catch error and set state to intiial?
        // I believe the bug is when calling auth.getUser(), now checking to ensure we have a token before calling it.
        //Only getting the idToken, is that enough?  Do we want the access token as well?
        // console.log('Before get ID');
        const token = (await auth.getIdToken()) || null;
        // console.log('After get ID', state.token, token);
        // Only update the token if it is different.  (Do not want to cause extra renders)
        if (token !== state.token) {
            // console.log('Before Update Auth State');
            setState({
                token,
                loading: token === null, //No sure I like 'loading' maybe authenticated? Change to token !== null
                user: token === null ? null : await auth.getUser(),
            });
            // console.log('After Update Auth State');
        }
    };

    return (
        <AuthContext.Provider value={{ ...state, updateAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthHandler = withAuth(({ auth }) => {
        const { updateAuth } = React.useContext(AuthContext);
        const location = useLocation();

        // This runs every single render.  updateAuth has logic to ignore state updates.
        React.useEffect(() => {
            updateAuth(auth);
        });

        // if login then login, if logout then logout.  Redirect to root in either case.
        React.useEffect(() => {
            if (location.pathname === '/login') auth.login('/');
            if (location.pathname === '/logout') auth.logout('/');
        }, [auth, location.pathname]);

        // Render nothing
        return null;
    },
);