import { createStore, combineReducers } from 'redux';
import pageReducer from "@/assets/store/pageReducer";
import {leaderboardItemProps} from "@/assets/components/LeaderboardItem";
export type PageData = {
    isAuthenticated: boolean,
    accessToken: string,
    basicAuthToken: string,
    projectId: string,
    environmentId: string,
    overallLeaderboard: leaderboardItemProps[],
    seasonalLeaderboard: leaderboardItemProps[]
}

const rootReducer = combineReducers({
    pageData: pageReducer,
})

export const store = createStore(rootReducer);