import React, { useEffect, useState} from 'react';
import { getAllRecipes } from '@/lib/api/api';
import RecipeCard from '@/components/RecipeCard';

const RecipeList: React.FC = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const allRecipes = await getAllRecipes();
            setRecipes(allRecipes);
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            {recipes.map((recipe: any) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;
