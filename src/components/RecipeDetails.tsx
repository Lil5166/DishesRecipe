import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '@/lib/api/api';

const RecipeDetails: React.FC = () => {
    const { recipeId } = useParams<{ recipeId: string }>();
    const [recipe, setRecipe] = useState<any>(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const fetchedRecipe = await getRecipeById(recipeId);
            setRecipe(fetchedRecipe);
        };
        fetchRecipe();
    }, [recipeId]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{recipe.strMeal}</h1>
            <iframe width="560" height="315" src={recipe.strYoutube} title={recipe.strMeal} allowFullScreen></iframe>
            <p>Tags: {recipe.strTags}</p>
            <p>Category: {recipe.strCategory}</p>
            <p>Instructions: {recipe.strInstructions}</p>
            <p>Ingredients: {recipe.strIngredient1}, {recipe.strIngredient2}, {recipe.strIngredient3}, ...</p>
        </div>
    );
};

export default RecipeDetails;
