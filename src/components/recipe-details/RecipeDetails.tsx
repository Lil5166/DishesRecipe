import React, { NextPage } from 'next';
import { Typography, Grid, Button } from '@mui/material';
import styles from '@/components/recipe-details/RecipeDetails.module.css';
import { Recipe } from '@/types/Recipe';
import { Ingredient } from '@/types/Ingredient';
import Link from 'next/link';
import {useState} from "react";

interface RecipeDetailsProps {
    recipe: Recipe & Ingredient;
}

const RecipeDetails: NextPage<RecipeDetailsProps> = ({ recipe }) => {
    const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

    const handleIngredientToggle = (ingredient: string) => {
        if (checkedIngredients.includes(ingredient)) {
            setCheckedIngredients(prevChecked => prevChecked.filter(item => item !== ingredient));
        } else {
            setCheckedIngredients(prevChecked => [...prevChecked, ingredient]);
        }
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
                    Tags: {recipe?.strTags || 'No Tags'}
                </Typography>
            </Grid>
            <Grid item xs={12} className={styles.infoBox}>
                <Typography variant="body1" className={styles.category}>
                    Category: {recipe?.strCategory || 'No category'}
                </Typography>
            </Grid>
            <Grid item xs={12} className={styles.infoBox}>
                <Typography variant="body1" className={styles.instructions}>
                    Instructions: {recipe?.strInstructions || 'No Instruction'}
                </Typography>
            </Grid>
            <Grid item xs={12} className={styles.infoBox}>
                <Typography variant="body1" className={styles.ingredients}>
                    Ingredients:
                </Typography>
                <ul className={styles.ingredientsList}>
                    {Object.keys(recipe).map((key) => {
                        if (key.includes('strIngredient') && recipe[key as keyof Ingredient]) {
                            const ingredient = recipe[key as keyof Ingredient] as string;
                            return (
                                <li
                                    key={key}
                                    className={styles.ingredient}
                                    onClick={() => handleIngredientToggle(ingredient)}
                                >
                                    <input
                                        type="checkbox"
                                        className={styles.ingredientCheckbox}
                                        checked={checkedIngredients.includes(ingredient)}
                                        readOnly
                                    />
                                    <label className={styles.ingredientLabel}>{ingredient}</label>
                                </li>
                            );
                        }
                        return null;
                    })}
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
