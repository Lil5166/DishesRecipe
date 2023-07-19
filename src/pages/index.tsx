import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import RecipeList from '@/components/RecipeList';
import RecipeDetails from "@/components/RecipeDetails";

const HomePage: NextPage = () => {
    const router = useRouter();

    return (
        <div>
            {router.query.recipeId ? (
                <RecipeDetails recipeId={router.query.recipeId as string} />
            ) : (
                <RecipeList />
            )}
        </div>
    );
};

export default HomePage;
