import React from 'react';
import {GetStaticProps, NextPage} from 'next';
import {useRouter} from 'next/router';
import RecipeDetails from "@/components/recipe-details/RecipeDetails";
import RecipeList from "@/components/recipe-list";
import {getRecipeById} from '@/lib/api/api';
import {Recipe} from "@/types/Recipe";

interface RecipePageProps {
    recipe: Recipe | null;
}

const HomePage: NextPage<RecipePageProps> = ({recipe}) => {
    const router = useRouter();

    return (
        <div>
            {router.query.recipeId && recipe ? (
                <RecipeDetails recipe={recipe}/>
            ) : (
                <RecipeList/>
            )}
        </div>
    );
};

export default HomePage;

export const getStaticProps: GetStaticProps<RecipePageProps> = async ({params}) => {
    const recipeId = params?.recipeId as string;

    const fetchedRecipe = recipeId ? await getRecipeById(recipeId) : null;

    return {
        props: {
            recipe: fetchedRecipe,
        },
        revalidate: 60,
    };
};
