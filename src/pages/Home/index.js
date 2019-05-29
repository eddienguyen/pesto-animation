import React from "react";
import RecipeCard from "../../components/RecipeCard";
import { withRouter } from 'react-router-dom';
import withRecipes from "./withRecipe";
import withNavigation from "./withNavigation";

const RecipeCardWithNavigation = withNavigation(RecipeCard);
const RecipeCardWithNavigationWithRouter = withRouter(RecipeCardWithNavigation);
const Home = ({ recipes = [], history, gotoRecipe }) => {
    return (
        <div>
            {recipes.map((recipe, index) => {
                return <RecipeCardWithNavigationWithRouter key={index} recipe={recipe} />;
            })}
        </div>
    );
};

export default withRecipes(Home);