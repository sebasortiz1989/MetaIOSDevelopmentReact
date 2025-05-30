import {useReducer} from "react";

function UseReduceExample() {
    const initialState = {money: 100};
    const reducer = (state, action) => {
        if (action.type === 'ride') {
            return {money: state.money + 10};
        }

        if (action.type === 'fuel') {
            return {money: state.money - 50};
        }

        return new Error();
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="vertical-container">
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({type: 'ride'})}>A new customer!</button>
                <button onClick={() => dispatch({type: 'fuel'})}>Refill the tank!</button>
            </div>
        </div>
    )
}

export default UseReduceExample;