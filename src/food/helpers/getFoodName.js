export const getFoodName =  async  (name) => {
    try{
        const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${name}&search_simple=1&action=process&json=1`;
        const resp = await fetch(url);
        if(!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const json = await resp.json();

        const products = json.products || [];
       // console.log(products);

        const foodsName = products.map(food => ({
            id: food.id ?? food.code ?? Math.random().toString(36).substring(2, 15),
            name: food.product_name ?? '',
            image: food.image_url ?? '',
            brands: food.brands ?? '',
            packaging: [food.product_quantity, food.product_quantity_unit].filter(v => v != null && v !== '').join(' '),
            code: food.code ?? '',
            // Random price for demonstration less than $100
            price: food.ecoscore_score != null ? (Math.abs(food.ecoscore_score) % 100).toFixed(2) : 11.99,
        }));

        return foodsName;
    }catch(err){
        console.log(err);
        return[];
    }
}