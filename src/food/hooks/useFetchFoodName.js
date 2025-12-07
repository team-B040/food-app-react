import {getFoodName} from "../helpers/getFoodName";
import {useEffect, useState} from "react";

export const useFetchFoodName = (name) => {
    const [foodName, setFoodName] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFoodName = async() =>{
            const foods = await getFoodName(name);
            setFoodName(foods);
            setIsLoading(false);
        };
        fetchFoodName();
    })

    return {
        foodName,
        isLoading
    };
}