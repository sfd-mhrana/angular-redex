import { createReducer, on } from "@ngrx/store";
import { increment,decrement,reset } from "./counter.actions";
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
    on(reset, () => {
        return{
            counter:0,
        }
    }),
    )


export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}