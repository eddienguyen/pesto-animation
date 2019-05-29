import React from "react";
import RecipePage from './RecipePage';
import withRecipe from './withRecipe';
import withNavigation from './withNavigation';
const RecipePageWithRecipeData = withRecipe(RecipePage);

const RecipePageWithDataAndNavigation = withNavigation(RecipePageWithRecipeData);

export default (props) => {
    return <RecipePageWithDataAndNavigation  {...props} />
};
