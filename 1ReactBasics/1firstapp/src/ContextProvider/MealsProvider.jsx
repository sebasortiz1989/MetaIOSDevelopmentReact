import React from 'react';

const MealsContext = React.createContext();

const todaysMeals = ["Bacon and eggs", "Salad", "Hamburguer"];

const MealsProvider = ({ children }) => {
    let [meals, setMeals] = React.useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext);
export default MealsProvider;