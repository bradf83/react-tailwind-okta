import React, {useReducer} from 'react';
import MainContentContainer from "../layout/MainContentContainer";

// TODO: Things I don't like so far
// I need a better way of tracking uom for an ingredient

// Ingredient

// Serving Size (Put whatever you want)
// Number of Servings (Fractional Number)

// New Ingredient Structure
// {id: 1, name: "Carrots", servingSize: "1 Cup", protein: 0, carbs: 0, fat: 0, calories: 0}
// Recipe Structure
// {id: 1, name: "Recipe One", numberOfServings: 2}
// Recipe Ingredients Structure
// {{id: 1, recipeId: 1, ingredientId: 1, numberOfServings: 2.5}]

// Functionality List
// Create Ingredient
// Edit Ingredient
// Delete Ingredient
// Create Recipe
// Edit Recipe
// Delete Recipe
// See Nutrition for Recipe (per serving)

// Next
// Create a menu
// Total Ingredients for menu
// Recipes that share ingredients
// Add cost for ingredients by
// Store Structure
// {id: 1, name: "Costco"}
// Buy Source Structure
// {id: 1, ingredientId: 1, storeId: 1, cost: 7.99, packageSize: 200g}
// Determine cost/g


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
            {id: 2, amount: 1, ingredientId: 2}
        ]
    }
];

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INGREDIENT":
            return {
                ...state, selectedIngredientId: action.selectedIngredientId,
                selectedIngredient: ingredients.find(ing => ing.id === Number(action.selectedIngredientId)),
                selectedIngredientSize: undefined, selectedIngredientSizeId: ''
            };
        case "CHANGE_INGREDIENT_SIZE":

            let selectedIngredientSize = undefined;
            if (state.selectedIngredient && action.selectedIngredientSizeId !== '') {
                selectedIngredientSize = state.selectedIngredient.sizes.find(size => size.id === Number(action.selectedIngredientSizeId));
            }

            return {
                ...state, selectedIngredientSizeId: action.selectedIngredientSizeId,
                selectedIngredientSize: selectedIngredientSize
            };
        case "CHANGE_RECIPE":
            return {
                ...state,
                selectedRecipeId: action.selectedRecipeId,
                selectedRecipe: recipes.find(current => current.id === Number(action.selectedRecipeId))
            };
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

const changeRecipe = (recipeId) => {
    return {
        type: 'CHANGE_RECIPE',
        selectedRecipeId: recipeId
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

    return (
        <MainContentContainer>
            <h1 className="font-bold mb-2">Ingredients</h1>
            <div className="flex">
                <div className="w-2/3 m-1">
                    <CustomSelect autoFocus={true}
                                  onChange={(event) => dispatch(changeIngredient(event.target.value))}
                                  value={state.selectedIngredientId}
                    title="Please select an ingredient">
                        <option value>Select Ingredient</option>
                        {ingredients.map(current =>
                            <option key={current.id} value={current.id}>{current.name}</option>
                        )}
                    </CustomSelect>
                    <div className="text-sm italic text-gray-600 mb-2">
                        Please select an ingredient
                    </div>
                    {/*TODO: Change size to measurement throughout*/}
                    <CustomSelect onChange={(event) => dispatch(changeIngredientSize(event.target.value))}
                                  value={state.selectedIngredientSizeId}>
                        <option value>Select Measurement</option>
                        {state.selectedIngredient && state.selectedIngredient.sizes.map(current =>
                            <option key={current.id} value={current.id}>{`${current.amount} ${current.uom}`}</option>
                        )}
                    </CustomSelect>
                </div>
                <div className="w-1/3 m-1">

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

            <hr className="m-2" />
            <h1 className="font-bold mb-2">Please select a recipe:</h1>

            <CustomSelect onChange={(event) => dispatch(changeRecipe(event.target.value))}
                          value={state.selectedRecipeId}>
                <option value>Select Recipe</option>
                {recipes.map(current =>
                    <option key={current.id} value={current.id}>{current.name}</option>
                )}
            </CustomSelect>

            <RecipeComponent selectedRecipe={state.selectedRecipe}/>

        </MainContentContainer>
    )
};

const RecipeComponent = ({selectedRecipe = undefined}) => {
    if(!selectedRecipe){
        return null;
    }
    return (
        <div className="mt-2 border border-gray-500 shadow-md rounded-sm p-2">
            {selectedRecipe.ingredients.map(current =>
                <RecipeItem key={current.id} item={current} />
            )}
        </div>
    )
};

const RecipeItem = ({item}) => {
    // TODO: Revisit normalizing data for Redux
    // Get the ingredient from the list
    const ingredient = ingredients.find(current => current.id === item.ingredientId);
  return (
      <div>
          {`${item.amount * ingredient.sizes[0].amount} ${ingredient.sizes[0].uom} of ${ingredient.name}`}
      </div>
  )
};

const CustomSelect = ({onChange = () => {}, value = '', children, autoFocus = false, title = ''}) => {
    return (
        <select autoFocus={autoFocus} onChange={onChange} value={value} title={title}
                className={"appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"}>
            {children}
        </select>
    )
};

// This version works but no longer allows us to give defaults
// const CustomSelect = ({children, ...rest}) => {
//     return (
//         <select {...rest}
//                 className={"appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"}>
//             {children}
//         </select>
//     )
// };

export default Nutrition;