import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Collapse, Typography } from '@mui/material';
import Link from 'next/link'; // Use Link from Next.js
import styles from '@/styles/RecipeCard.module.css';

interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strTags?: string;
    strCategory: string;
    strInstructions: string;
}

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card className={styles.card}>
            <CardMedia component="img" src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.image} />

            <CardContent className={styles.card}>
                <Typography variant="h6" className={styles.recipeTitle}>
                    Назва страви: {recipe.strMeal}
                </Typography>
                {recipe.strTags && (
                    <Typography variant="h6" className={styles.recipeTitle}>
                        Теги: {recipe.strTags}
                    </Typography>
                )}
                <Typography variant="h6" className={styles.recipeTitle}>
                    Категорія: {recipe.strCategory}
                </Typography>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant="body2" color="textSecondary" className={styles.instructions}>
                        {recipe.strInstructions}
                    </Typography>
                </Collapse>
                <div className={styles.buttonContainer}>
                    <Link href={`/recipes/${recipe.idMeal}`}>
                        <div className={styles.button}>Подивитися рецепт</div>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default RecipeCard;
