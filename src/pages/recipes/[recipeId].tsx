import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import {getAllRecipes, getRecipeById} from '@/lib/api/api';
import RecipeDetails, { RecipeDetailsProps } from '@/components/RecipeDetails';
import {Recipe} from "@/types/Recipe";

export const getStaticPaths: GetStaticPaths = async () => {
    const allRecipes = await getAllRecipes();
    const paths = allRecipes.map((recipe : Recipe) => ({
        params: { recipeId: recipe.idMeal },
    }));

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<RecipeDetailsProps> = async ({ params }) => {
    const recipeId = params?.recipeId as string;

    if (!recipeId) {
        return {
            notFound: true,
        };
    }

    const fetchedRecipe = await getRecipeById(recipeId);

    if (!fetchedRecipe) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            recipe: fetchedRecipe,
        },
        revalidate: 60,
    };
};

const RecipePage: NextPage<RecipeDetailsProps> = ({ recipe }) => {
    return (
        <div>
            <RecipeDetails recipe={recipe} />
        </div>
    );
};

export default RecipePage;