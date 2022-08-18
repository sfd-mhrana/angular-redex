import { postsReducer } from "../posts/state/post.reducer";
import { PostsState } from "../posts/state/post.state";
import { counterReducer } from "../rxcounter/state/counter.reducer";
import { CounterState } from "../rxcounter/state/counter.state";

export interface AppState{
    counter:CounterState,
    posts:PostsState
}
export const appReducer={
    counter:counterReducer,
    posts:postsReducer
}