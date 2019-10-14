import {useEffect} from 'react';

/**
 * A custom hook that fires a handler when clicking outside of the passed in reference.
 * @param ref - the reference to the wrapping component that you want to check for clicks outside of.
 * @param callback - the function to execute when clicking outside the container referenced by 'ref'.  Remember to wrap
 * in useCallback if possible to prevent the useEffect from firing on creation of a new function.
 */
export const useClickOutside = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = e => {
            // Do nothing if clicking ref element or it's children
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            callback(e);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
};