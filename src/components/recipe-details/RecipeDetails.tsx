import React, { NextPage } from 'next';
import { Typography, Grid, Button } from '@mui/material';
import styles from '@/components/recipe-details/RecipeDetails.module.css';
import { Recipe } from '@/types/Recipe';
import { Ingredient } from '@/types/Ingredient';
import Link from 'next/link';
import { useState } from 'react';

interface RecipeDetailsProps {
    recipe: Recipe & Ingredient;
}

const RecipeDetails: NextPage<RecipeDetailsProps> = ({ recipe }) => {
    const formatTags = (tags: string) => {
        return tags.split(',').map(item => item.trim()).join(', ');
    };

    return (
        <Grid container spacing={2} className={styles.container}>
            <Grid item xs={12}>
                <Typography variant="h4" className={styles.title}>
                    {recipe?.strMeal || 'No Meal Name'}
                </Typography>
            </Grid>
            <Grid item xs={12} className={styles.youtubeWrapper}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/gtQSr18yQz0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </Grid>
            <Grid item xs={12} className={styles.infoBox}>
                <Typography variant="body1" className={styles.tags}>
                    Tags: {recipe?.strTags ? formatTags(recipe.strTags) : 'No Tags'}
                </Typography>
            </Grid>
            <Grid item xs={12} className={styles.infoBox}>
                <Typography variant="body1" className={styles.category}>
                    Категорії: {recipe?.strCategory || 'No category'}
                </Typography>
            </Grid>
            <Grid item xs={12} className={styles.infoBox}>
                <Typography variant="body1" className={styles.instructions}>
                    Інструкція: {recipe?.strInstructions || 'No Instruction'}
                </Typography>
            </Grid>
            <Grid item xs={12} className={styles.infoBox}>
                <Typography variant="body1" className={styles.ingredients}>
                    Інградієнти:
                </Typography>
                <ul className={styles.ingredientsList}>
                    {recipe?.strIngredient1 && <li>{recipe.strIngredient1}</li>}
                    {recipe?.strIngredient2 && <li>{recipe.strIngredient2}</li>}
                    {recipe?.strIngredient3 && <li>{recipe.strIngredient3}</li>}
                    {recipe?.strIngredient4 && <li>{recipe.strIngredient4}</li>}
                    {recipe?.strIngredient5 && <li>{recipe.strIngredient5}</li>}
                    {recipe?.strIngredient6 && <li>{recipe.strIngredient6}</li>}
                    {recipe?.strIngredient7 && <li>{recipe.strIngredient7}</li>}
                    {recipe?.strIngredient8 && <li>{recipe.strIngredient8}</li>}
                    {recipe?.strIngredient9 && <li>{recipe.strIngredient9}</li>}
                    {recipe?.strIngredient10 && <li>{recipe.strIngredient10}</li>}
                    {recipe?.strIngredient11 && <li>{recipe.strIngredient11}</li>}
                    {recipe?.strIngredient12 && <li>{recipe.strIngredient12}</li>}
                    {recipe?.strIngredient13 && <li>{recipe.strIngredient13}</li>}
                    {recipe?.strIngredient14 && <li>{recipe.strIngredient14}</li>}
                    {recipe?.strIngredient15 && <li>{recipe.strIngredient15}</li>}
                    {recipe?.strIngredient16 && <li>{recipe.strIngredient16}</li>}
                    {recipe?.strIngredient17 && <li>{recipe.strIngredient17}</li>}
                    {recipe?.strIngredient18 && <li>{recipe.strIngredient18}</li>}
                    {recipe?.strIngredient19 && <li>{recipe.strIngredient19}</li>}
                    {recipe?.strIngredient20 && <li>{recipe.strIngredient20}</li>}
                </ul>
            </Grid>
            <Grid item xs={12} className={styles.buttonContainer}>
                <Link href="/">
                    <Button variant="contained" color="primary">
                        Повернутися до всіх страв
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export default RecipeDetails;
