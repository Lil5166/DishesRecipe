import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import styles from '@/components/recipe-card/RecipeCard.module.css';

interface RecipeCardProps {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strTags?: string;
    strCategory: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ strMeal, strMealThumb, strTags, strCategory, idMeal }) => {

    return (
        <Link href={`/recipes/${idMeal}`}  className={styles.cardLink}>
                <Card className={styles.card}>
                    <CardMedia component="img" src={strMealThumb} alt={strMeal} className={styles.image} />

                    <CardContent className={styles.cardContent}>
                        <Typography variant="h6" className={styles.recipeTitle}>
                            Назва страви: {strMeal}
                        </Typography>
                        {strTags && (
                            <Typography variant="h6" className={styles.recipeTitle}>
                                Теги: {strTags}
                            </Typography>
                        )}
                        <Typography variant="h6" className={styles.recipeTitle}>
                            Категорія: {strCategory}
                        </Typography>
                    </CardContent>
                </Card>
        </Link>
    );
};

export default RecipeCard;
