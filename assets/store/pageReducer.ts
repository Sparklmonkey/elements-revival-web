import {leaderboardItemProps} from "@/assets/components/LeaderboardItem";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: PageData = {
    isAuthenticated: false,
    accessToken: '',
    basicAuthToken: 'Basic ZWQwZTU4NTktY2NlYS00ZWRhLWFlNTgtOGRkOTNmYWZhOWUxOjQyRDRBMmtVb2RWbHVRai1GQUdrZHhOWGlReUkwaVo4',
    projectId: 'ec77d6b3-4d48-4c2c-a1d4-f84f9dac7aaa',
    environmentId: '80206c0b-5c1b-428e-8935-1132903075c2',
    overallLeaderboard: [],
    seasonalLeaderboard: [],
    shouldShowUnity: true
}

export interface PageData {
    isAuthenticated: boolean,
    accessToken: string,
    basicAuthToken: string,
    projectId: string,
    environmentId: string,
    overallLeaderboard: leaderboardItemProps[],
    seasonalLeaderboard: leaderboardItemProps[],
    shouldShowUnity: boolean,
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setAuthenticated: (state) => {
            state.isAuthenticated = true
        },
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload
        },
        setOverallLeaderboard: (state, action: PayloadAction<leaderboardItemProps[]>) => {
            state.overallLeaderboard = action.payload
        },
        setSeasonalLeaderboard: (state, action: PayloadAction<leaderboardItemProps[]>) => {
            state.seasonalLeaderboard = action.payload
        },
        updateShouldShowUnity: (state, action: PayloadAction<boolean>) => {
            state.shouldShowUnity = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setAuthenticated, setAccessToken, setOverallLeaderboard, setSeasonalLeaderboard, updateShouldShowUnity } = pageSlice.actions

export default pageSlice.reducer
