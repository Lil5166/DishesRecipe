import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllRecipes, getRecipeById } from '@/lib/api/api';
import RecipeDetails from "@/components/recipe-details/RecipeDetails";
import { Recipe } from "@/types/Recipe";

interface RecipePageProps {
    recipe: Recipe;
}

const RecipePage: NextPage<RecipePageProps> = ({ recipe }) => {
    return (
        <div>
            <RecipeDetails recipe={recipe} />
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const allRecipes = await getAllRecipes();
    const paths = allRecipes.map((recipe: Recipe) => ({
        params: { recipeId: recipe.idMeal },
    }));

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<RecipePageProps> = async ({ params }) => {
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

export default RecipePage;