import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Grid, Typography, TextField, InputAdornment } from '@mui/material';
import usePagination from '@/hooks/usePagination';
import { getAllRecipes } from '@/lib/api/api';
import RecipeCard from "@/components/recipe-card/RecipeCard";
import styles from './RecipeList.module.css';

const RecipeList: NextPage = () => {
    const [recipes, setRecipes] = useState([]);
    const { paginate, startIndex, endIndex } = usePagination(10);

    const [isCardClicked, setIsCardClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchRecipes = async () => {
        const allRecipes = await getAllRecipes();
        setRecipes(allRecipes);
    }

    useEffect(() => {
        fetchRecipes();
    }, []);

    const currentRecipes = recipes.slice(startIndex, endIndex);

    return (
        <div className={styles.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h1" align="center" className={styles.title}>
                        All Recipes
                    </Typography>
                </Grid>
                {currentRecipes.map((recipe: any) => (
                    <Grid item xs={12} sm={6} md={4} key={recipe.idMeal}>
                        <div
                            className={`${styles.card} ${isCardClicked ? styles.active : ''} ${isLoading ? styles.loading : ''}`}
                            onClick={() => {
                                setIsCardClicked(true);
                                setIsLoading(true);
                            }}
                        >
                            <RecipeCard
                                strMeal={recipe.strMeal}
                                strMealThumb={recipe.strMealThumb}
                                strCategory={recipe.strCategory}
                                strTags={recipe.strTags}
                                idMeal={recipe.idMeal}
                            />
                        </div>
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <div className={styles.paginationContainer}>
                        {Array.from({ length: Math.ceil(recipes.length / 10) }).map((_, index) => (
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
        </div>
    );
};

export default RecipeList;
