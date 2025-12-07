import {useState, useEffect} from "react";
import {getFoodCategory} from "../helpers/getFoodCategory";

export const useFetchFoodCategory = (category) =>{
    const [foodCategory, setFoodCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFoodCategory = async() =>{
            const foods = await getFoodCategory(category);
            setFoodCategory(foods);
            setIsLoading(false);
        };
        fetchFoodCategory();
    }, []);
    return {
        foodCategory,
        isLoading
    };

}