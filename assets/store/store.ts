import { configureStore } from '@reduxjs/toolkit'
import pageReducer from "@/assets/store/pageReducer";

export const store = configureStore({
    reducer: {
        pageData: pageReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch