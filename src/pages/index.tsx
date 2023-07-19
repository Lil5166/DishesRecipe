import { useRouter } from 'next/router';
import RecipeList from '@/components/RecipeList';
import RecipeDetails from '@/components/RecipeDetails';

const HomePage: React.FC = () => {
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
