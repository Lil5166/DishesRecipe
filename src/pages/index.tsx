import React, { useEffect, useState } from 'react';
import { getAllRecipes } from '@/lib/api/api';
import RecipeCard from '@/components/RecipeCard';
import usePagination from '@/hooks/usePagination';

const Page: React.FC = () => {
    const [recipes, setRecipes] = useState([]);
    const { currentPage, paginate, startIndex, endIndex } = usePagination(10);

    useEffect(() => {
        const fetchRecipes = async () => {
            const allRecipes = await getAllRecipes();
            setRecipes(allRecipes);
        };
        fetchRecipes();
    }, []);

    const currentRecipes = recipes.slice(startIndex, endIndex);

    return (
        <div>
            <h1>All Recipes</h1>
            {currentRecipes.map((recipe: any) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
            <div>
                {Array.from({ length: Math.ceil(recipes.length / 10) }).map((_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Page;
