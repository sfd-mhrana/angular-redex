import { createReducer, on } from "@ngrx/store";
import { increment,decrement,reset,customeIncrement } from "./counter.actions";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return{
            ...state,
            counter:state.counter+1,
        }
    }),
    on(decrement, (state) => {
        return{
            ...state,
            counter:state.counter-1,
        }
    }),
    on(reset, (state) => {
        return{
            ...state,
            counter:0,
        }
    }),
    on(customeIncrement, (state,actions) => {
        console.warn(actions)
        return{
            ...state,
            counter:state.counter+actions.value,
        }
    }),
    )


export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}