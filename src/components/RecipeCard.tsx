import React from 'react';

type RecipeCardProps = {
    recipe: {
        idMeal: string;
        strMeal: string;
        strCategory: string;
        strMealThumb: string;
        strTags: string;
        strInstructions: string;
        strIngredient1: string;
        strIngredient2: string;
        strIngredient3: string;
    };
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h2>{recipe.strMeal}</h2>
            <p>Category: {recipe.strCategory}</p>
            <p>Tags: {recipe.strTags}</p>
            <p>Instructions: {recipe.strInstructions}</p>
            <p>Ingredients: {recipe.strIngredient1}, {recipe.strIngredient2}</p>
        </div>
    );
};

export default RecipeCard;
