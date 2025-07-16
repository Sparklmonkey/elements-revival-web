import { configureStore } from '@reduxjs/toolkit'
import pageReducer from "@/assets/store/pageReducer";
import unityReducer from "@/assets/store/unityReducer";

export const store = configureStore({
    reducer: {
        pageData: pageReducer,
        unityData: unityReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch