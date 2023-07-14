import React, {useEffect, useState} from 'react';
import {Grid, Typography, Card, CardContent, CardMedia, Collapse} from '@mui/material';
import {StaticRouter, Link} from 'react-router-dom';
import usePagination from '@/hooks/usePagination';
import {getAllRecipes} from '@/lib/api/api';
import styles from '@/styles/RecipeCard.module.css';

export const RecipeList: React.FC = () => {
    const [recipes, setRecipes] = useState([]);
    const {currentPage, paginate, startIndex, endIndex} = usePagination(10);

    useEffect(() => {
        const fetchRecipes = async () => {
            const allRecipes = await getAllRecipes();
            setRecipes(allRecipes);
        };
        fetchRecipes();
    }, []);

    const currentRecipes = recipes.slice(startIndex, endIndex);

    const [expandedRecipeId, setExpandedRecipeId] = useState<string | null>(null);

    const handleExpandRecipe = (recipeId: string) => {
        setExpandedRecipeId((prevId) => (prevId === recipeId ? null : recipeId));
    };

    return (
        <StaticRouter>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h1" align="center" className={styles.title}>
                        All Recipes
                    </Typography>
                </Grid>
                {currentRecipes.map((recipe: any) => (
                    <Grid item xs={12} key={recipe.idMeal}>
                        <Card className={styles.card}>
                            <CardMedia
                                component="img"
                                src={recipe.strMealThumb}
                                alt={recipe.strMeal}
                                className={styles.image}
                            />

                            <CardContent className={styles.card}>
                                <Typography variant="h6" className={styles.recipeTitle}>
                                    Назва страви: {recipe.strMeal}
                                </Typography>
                                {recipe.strTags && (
                                    <Typography variant="h6" className={styles.recipeTitle}>
                                        Теги: {recipe.strTags}
                                    </Typography>
                                )}
                                <Typography variant="h1" className={styles.recipeTitle}>
                                    Категорія: {recipe.strCategory}
                                </Typography>
                                <Collapse in={expandedRecipeId === recipe.idMeal} timeout="auto" unmountOnExit>
                                    <Typography variant="body2" color="textSecondary" className={styles.instructions}>
                                        {recipe.strInstructions}
                                    </Typography>
                                </Collapse>
                                <div className={styles.buttonContainer}>
                                    <Link to={`/recipes/${recipe.idMeal}`} className={styles.button}>
                                        Подивитися рецепт
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <div className={styles.paginationContainer}>
                        {Array.from({length: Math.ceil(recipes.length / 10)}).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={styles.paginationButton}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </StaticRouter>
    );
};

export default RecipeList;
