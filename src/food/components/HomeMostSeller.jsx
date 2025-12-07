import {HorizontalCarousel} from "./HorizontalCarousel";
import {useFilteredFood} from "../hooks/useFilteredFood";
import {FoodItem,SearchInput} from "./index";

export const HomeMostSeller = ({category, addCart}) => {
    const { filteredFood, name, setName, isLoading } = useFilteredFood(category);
    return (
        <>
            <h4 className="text-center">Lo mas vendido</h4>
            <div className="container">
                <div className="col-4 mx-auto mb-3 mt-3">
                    <SearchInput value={name} onChange={setName} />
                </div>
                {isLoading && <h2 className="text-center mt-3">Loading...</h2>}
                {
                    (filteredFood.length === 0 && !isLoading)
                    && (<h3 className="text-center mt-3">No se encontro producto "{name}"</h3>)
                }
                <HorizontalCarousel
                    items={filteredFood}
                    renderItem={food => <FoodItem key={food.code} {...food} addCart={addCart} />}
                />
            </div>
        </>
    );
}