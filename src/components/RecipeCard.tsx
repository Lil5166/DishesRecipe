import React from 'react';

type RecipeCardProps = {
    recipe: {
        idMeal: string;
        strMeal: string;
        strCategory: string;
        strMealThumb: string;
        strTags: string;
    };
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h2>{recipe.strMeal}</h2>
            <p>Category: {recipe.strCategory}</p>
            <p>Tags: {recipe.strTags}</p>
        </div>
    );
};

export default RecipeCard;
