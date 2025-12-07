import { useMemo, useState } from 'react';
import { useFetchFoodCategory } from './useFetchFoodCategory';

export const useFilteredFood = (category) => {
    const { foodCategory = [], isLoading } = useFetchFoodCategory(category);
    const [name, setName] = useState('');

    const filteredFood = useMemo(() => {
        const q = name.trim().toLowerCase();
        if (q === '') return foodCategory;
        return foodCategory.filter(f => (f.name || '').toLowerCase().includes(q));
    }, [name, foodCategory]);

    return { filteredFood, name, setName, isLoading };
};