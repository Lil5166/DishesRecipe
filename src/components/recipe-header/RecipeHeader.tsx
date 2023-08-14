import React from 'react';
import { AppBar, Toolbar, Typography, Grid, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from '@/components/recipe-header/RecipeHeader.module.css';

const RecipeHeader = () => {
    return (
        <AppBar position="static" className={styles.header}>
            <Toolbar>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={6} sm={4} md={3}>
                        <Typography variant="h6" className={styles.dishesRecipe}>
                            Dishes Recipe
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} className={styles.searchContainer}>
                            <TextField
                                className={styles.searchInput}
                                placeholder="Search..."
                                variant="outlined"
                                size="small"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default RecipeHeader;
