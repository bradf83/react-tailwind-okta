import React, {useReducer, useContext} from 'react';
import MainContentContainer from "../layout/MainContentContainer";

// My reducer for the example

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT_COUNT":
            return {...state, count: state.count + 1};
        case "CHANGE_COLOR":
            return {...state, color: state.color === 'bg-blue-500' ? 'bg-orange-500' : 'bg-blue-500'};
        default:
            return state;
    }
};

// Some action creators for the example

const incrementCount = () => {
    return {
        type: "INCREMENT_COUNT",
    }
};

const changeColor = () => {
    return {
        type: "CHANGE_COLOR",
    }
};

// Here I create my context, passing nothing for a default as nothing will be asking for the state without a provider.
const MyContext = React.createContext();

// An example component to show a parent component creating state and passing that state down to children using context.
const ReducerContext = () => {
    // Create my normal reducer pattern without destructuring the array, could destructure and send as two params as well
    const someContext = useReducer(reducer, {count: 0, color: 'bg-blue-500'});

    return (
        <MainContentContainer>
            {/* Here I am passing the object that is passed back from useReducer (an array with two elements)
            The first element being: state
            The second element being: dispatch
            */}
            <div>State from outside the provider (the owner of the state): Count = {someContext[0].count}, Color = {someContext[0].color}</div>

            {/* Create a provider and pass the result from useReducer to it */}
            <MyContext.Provider value={someContext}>
                <IncrementCount/>
                <ColorChanger/>
            </MyContext.Provider>

        </MainContentContainer>
    )
};

// A component to display the count from context and increment the count using dispatch from context
const IncrementCount = () => {
    const [state, dispatch] = useContext(MyContext);
    return (
        <>
            <div className="p-3 border border-red-500">
                <div>The count from inside the IncrementCount Component: {state.count}</div>
                <div><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                             onClick={() => dispatch(incrementCount())}>Increment</button></div>
            </div>
        </>
    )
};
// A component to use the color from context and change the color on click using dispatch from context

const ColorChanger = () => {
    const [state, dispatch] = useContext(MyContext);

    return (
        <div className={`p-3 mt-3 ${state.color}`} onClick={() => dispatch(changeColor())}>
            A div that will change color when clicked from inside the provider
        </div>
    )
}


export default ReducerContext;