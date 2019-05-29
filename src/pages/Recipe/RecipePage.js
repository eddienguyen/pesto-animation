import React from 'react';
import RecipeCard from 'components/RecipeCard';

export default ({ recipe, goBack }) => {
    return <RecipeCard recipe={recipe} expanded goBack={goBack} />
}