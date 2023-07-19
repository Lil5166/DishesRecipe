import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Grid, Typography } from '@mui/material';
import usePagination from '@/hooks/usePagination';
import { getAllRecipes } from '@/lib/api/api';
import RecipeCard from "@/components/RecipeCard";
import styles from '@/styles/RecipeCard.module.css';

const RecipeList: NextPage = () => {
    const [recipes, setRecipes] = useState([]);
    const { paginate, startIndex, endIndex } = usePagination(10);

    useEffect(() => {
        const fetchRecipes = async () => {
            const allRecipes = await getAllRecipes();
            setRecipes(allRecipes);
        };
        fetchRecipes();
    }, []);

    const currentRecipes = recipes.slice(startIndex, endIndex);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h1" align="center" className={styles.title}>
                        All Recipes
                    </Typography>
                </Grid>
                {currentRecipes.map((recipe: any) => (
                    <Grid item xs={12} key={recipe.idMeal}>
                        <RecipeCard recipe={recipe} />
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
