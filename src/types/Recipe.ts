import {Ingredient} from "@/types/Ingredient";

export interface Recipe extends Ingredient{
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strTags?: string;
    strCategory: string;
    strYoutube: string;
}
