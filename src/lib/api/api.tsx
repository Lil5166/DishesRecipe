import axios from "axios";

export const getAllRecipes = async () => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
    return response.data.meals || [];
  } catch (error) {
    console.error('Помилка при отриманні страв:', error);
    return [];
  }
};

export const getRecipeById = async (recipeId: string) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
    return response.data.meals[0] || {};
  } catch (error) {
    console.error(`Помилка при отриманні страви з ID ${recipeId}:`, error);
    return {};
  }
};
