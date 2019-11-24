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

const reducer = (state, action) => {
    switch(action.type){
        case "CHANGE_INGREDIENT":
            return {...state, selectedIngredientId: action.selectedIngredientId,
                selectedIngredient: ingredients.find(ing => ing.id === Number(action.selectedIngredientId))};
        case "CHANGE_INGREDIENT_SIZE":
            return {...state, selectedIngredientSizeId: action.selectedIngredientSizeId};
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
            <select onChange={(event) => dispatch(changeIngredient(event.target.value))} value={state.selectedIngredientId}>
                <option value>Select Ingredient</option>
                {ingredients.map(current =>
                    <option key={current.id} value={current.id}>{current.name}</option>
                )}
            </select>
            <select onChange={(event) => dispatch(changeIngredientSize(event.target.value))} value={state.selectedIngredientSizeId}>
                <option value>Select Size</option>
                {state.selectedIngredient && state.selectedIngredient.sizes.map(current =>
                    <option key={current.id} value={current.id}>{`${current.amount} ${current.uom}`}</option>
                )}
            </select>

        </MainContentContainer>
    )
};

export default Nutrition;