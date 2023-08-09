import {NextPage} from 'next';
import {Typography, Grid} from '@mui/material';
import styles from '@/components/recipe-details/RecipeDetails.module.css';
import {Recipe} from "@/types/Recipe";

interface RecipeDetailsProps {
    recipe: Recipe
}


const RecipeDetails: NextPage<RecipeDetailsProps> = ({recipe}) => {
    return (
        <Grid container spacing={2} className={styles.container}>
            <Grid item xs={12}>
                <Typography variant="h4" className={styles.title}>
                    {recipe?.strMeal || 'No Meal Name'}
                </Typography>
            </Grid>
            <Grid item xs={12} className={styles.youtubeWrapper}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gtQSr18yQz0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" className={styles.tags}>
                    Tags: {recipe?.strTags || 'No Tags'}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" className={styles.category}>
                    Category: {recipe?.strCategory || 'No category'}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" className={styles.instructions}>
                    Instructions: {recipe?.strInstructions || 'No Instruction'}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" className={styles.ingredients}>
                    Ingredients:
                </Typography>
                <ul className={styles.ingredientsList}>
                    <li>{recipe?.strIngredient1 || 'No ingredient'}</li>
                    <li>{recipe?.strIngredient2 || 'No ingredient'}</li>
                    <li>{recipe?.strIngredient3 || 'No ingredient'}</li>
                    <li>{recipe?.strIngredient4 || 'No ingredient'}</li>
                    <li>{recipe?.strIngredient5 || 'No ingredient'}</li>
                    <li>{recipe?.strIngredient6 || 'No ingredient'}</li>
                </ul>
            </Grid>
        </Grid>
    );
};

export default RecipeDetails;
