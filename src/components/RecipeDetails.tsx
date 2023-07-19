import {NextPage} from 'next';
import {Typography, Grid} from '@mui/material';
import styles from '@/styles/RecipeDetails.module.css';
import {Recipe} from "@/types/Recipe";

export interface RecipeDetailsProps {
    recipe: Recipe;
}


const RecipeDetails: NextPage<RecipeDetailsProps> = ({recipe}) => {
    return (<Grid container spacing={2} className={styles.container}>
            <Grid item xs={12}>
                <Typography variant="h4" className={styles.title}>
                    {recipe.strMeal}
                </Typography>
            </Grid>
            <Grid item xs={12} className={styles.youtubeWrapper}>
                <iframe className={styles.youtubeFrame} src="https://www.youtube.com/embed/gtQSr18yQz0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" className={styles.tags}>
                    Tags: {recipe.strTags}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" className={styles.category}>
                    Category: {recipe.strCategory}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" className={styles.instructions}>
                    Instructions: {recipe.strInstructions}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" className={styles.ingredients}>
                    Ingredients:
                </Typography>
                <ul className={styles.ingredientsList}>
                    <li>{recipe.strIngredient1}</li>
                    <li>{recipe.strIngredient2}</li>
                    <li>{recipe.strIngredient3}</li>
                    <li>{recipe.strIngredient4}</li>
                    <li>{recipe.strIngredient5}</li>
                    <li>{recipe.strIngredient6}</li>
                    <li>{recipe.strIngredient7}</li>
                    <li>{recipe.strIngredient8}</li>
                    <li>{recipe.strIngredient9}</li>
                    <li>{recipe.strIngredient10}</li>
                </ul>
            </Grid>
        </Grid>
    );
};
export default RecipeDetails