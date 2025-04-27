import {useMealsListContext} from "./MealsProvider";
import Counter from "./Counter";

const MealsList = () => {
    const { meals } = useMealsListContext();

    return (
        <div>
            <h1>Meals List using Context API</h1>
            {
                meals.map((meal, index) => (
                    <h2 key={index}> {meal}</h2>
                ))
            }
            <Counter/>
        </div>
    )
}

export default MealsList;