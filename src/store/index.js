import { configureStore } from "@reduxjs/toolkit";
import PostReducer from './reducers/posts';
import UsersReducer from './reducers/users';

export const store = configureStore({
    reducer:{
        posts:PostReducer,
        users:UsersReducer
    }
})