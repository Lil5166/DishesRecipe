import React from 'react';
import axios from "axios";
export const getAllRecipes = async () => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
    return response.data.meals;
  } catch (error) {
    console.error('Помилка при отриманні страв:', error);
    return [];
  }
};
