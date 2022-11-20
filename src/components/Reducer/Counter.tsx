import { useReducer } from "react";

type CounterState = {
    count: number
}
type ResetActionType = {
    type: 'reset'
}
type UpadatActionType = {
    payload: number
    type: 'increment' | 'decrement'
}

type ActionType = UpadatActionType | ResetActionType


const initialstate = { count: 0 };
function reducer(state: CounterState, action: ActionType) {
    switch (action.type) {
        case 'increment': return { count: state.count + action.payload }
        case 'decrement': return { count: state.count - action.payload }
        case 'reset': return initialstate
        default: return state;
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialstate)
    return (
        <>
        <h1> Count:  <code>{state.count}</code></h1>
           
            <button style={{ padding: '4rem', margin: '1rem' }} onClick={() => dispatch({ type: 'increment', payload: 10 })}> Increment by 10 </button>
            <button style={{ padding: '4rem', margin: '1rem' }} onClick={() => dispatch({ type: 'decrement', payload: 10 })}> decrement by 10</button>
            <button style={{ padding: '4rem', margin: '1rem' }} onClick={() => dispatch({ type: 'reset' })}> Reset</button>
        </>
    );
}