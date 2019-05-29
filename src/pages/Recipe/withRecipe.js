import React from 'react';
import recipeData from 'assets/data';

export default Component => (props) => {
    const recipeId = parseInt(props.match.params.id);
    const recipe = recipeData.find(recipe => recipe.id === recipeId);
    return <Component recipe={recipe} {...props} />
}