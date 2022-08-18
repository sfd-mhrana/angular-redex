import { Post } from "src/app/models/post.module";

export interface PostsState{
    posts:Post[];
}

export const initialState:PostsState={
    posts:[
        {id:'1',title:'sample title 1',description:'Sample Description 1'},
        {id:'2',title:'sample title 2',description:'Sample Description 2'}
    ]
}