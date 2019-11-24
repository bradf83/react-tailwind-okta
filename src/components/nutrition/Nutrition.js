import React, {useEffect, useReducer} from 'react';
import MainContentContainer from "../layout/MainContentContainer";

const ingredients = [
    {
        id: 1,
        name: "Carrots",
        sizes: [
            {id: 1, amount: 1, uom: "gram(s)", protein: 0, carbohydrates: 0, fat: 0},
            {id: 2, amount: 28, uom: "gram(s)", protein: 1, carbohydrates: 2, fat: 3},
            {id: 3, amount: 1, uom: "oz(s)", protein: 1, carbohydrates: 2, fat: 3}
        ]
    },
    {
        id: 2,
        name: "Potato",
        sizes: [
            {id: 1, amount: 1, uom: "oz(s)", protein: 3, carbohydrates: 3, fat: 3}
        ]
    }
];

const recipes = [
    {
        id: 1,
        name: "Recipe One",
        ingredients: [
            {id: 1, amount: 1, ingredientId: 1},
            {id: 1, amount: 1, ingredientId: 2}
        ]
    }
]

const reducer = (state, action) => {
    switch(action.type){
        case "CHANGE_INGREDIENT":
            return {...state, selectedIngredientId: action.selectedIngredientId,
                selectedIngredient: ingredients.find(ing => ing.id === Number(action.selectedIngredientId))};
        case "CHANGE_INGREDIENT_SIZE":

            let selectedIngredientSize = undefined;
            if(state.selectedIngredient && action.selectedIngredientSizeId !== ''){
                selectedIngredientSize = state.selectedIngredient.sizes.find(size => size.id === Number(action.selectedIngredientSizeId));
            }

            return {...state, selectedIngredientSizeId: action.selectedIngredientSizeId,
                selectedIngredientSize};
        default:
            return state;
    }
};

const changeIngredient = (ingredientId) => {
    return {
        type: 'CHANGE_INGREDIENT',
        selectedIngredientId: ingredientId
    }
};

const changeIngredientSize = (ingredientSizeId) => {
    return {
        type: 'CHANGE_INGREDIENT_SIZE',
        selectedIngredientSizeId: ingredientSizeId
    }
};

const Nutrition = () => {
    const [state, dispatch] = useReducer(reducer,
        {selectedIngredientId: '', selectedIngredientSizeId: '', selectedIngredient: undefined});

    useEffect(() => {
        dispatch(changeIngredientSize(''));
    }, [state.selectedIngredientId]);

    return (
        <MainContentContainer>
            <h1 className="font-bold text-xl mb-2">
                Nutrition Information
            </h1>
            <div className="flex">
                <div className="w-2/3 border border-black rounded m-1 p-1">
                    <h1 className="font-bold mb-2">Ingredient Selector</h1>
                    <select onChange={(event) => dispatch(changeIngredient(event.target.value))} value={state.selectedIngredientId}
                        className={"appearance-none w-full mb-2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"}>
                        <option value>Select Ingredient</option>
                        {ingredients.map(current =>
                            <option key={current.id} value={current.id}>{current.name}</option>
                        )}
                    </select>
                    <select onChange={(event) => dispatch(changeIngredientSize(event.target.value))} value={state.selectedIngredientSizeId}
                     className={"appearance-none w-full mb-2 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"}>
                        <option value>Select Size</option>
                        {state.selectedIngredient && state.selectedIngredient.sizes.map(current =>
                            <option key={current.id} value={current.id}>{`${current.amount} ${current.uom}`}</option>
                        )}
                    </select>
                </div>
                <div className="w-1/3 border border-black rounded m-1 p-1">

                    {state.selectedIngredientSize && (
                        <>
                            <h1 className="font-bold mb-2">Nutrients</h1>
                            <h1>{`${state.selectedIngredientSize.amount} ${state.selectedIngredientSize.uom} of ${state.selectedIngredient.name}`}</h1>
                            <div>Protein: {state.selectedIngredientSize.protein}</div>
                            <div>Carbohydrates: {state.selectedIngredientSize.carbohydrates}</div>
                            <div>Fat: {state.selectedIngredientSize.fat}</div>
                        </>
                    )}
                </div>
            </div>
        </MainContentContainer>
    )
};

export default Nutrition;