import {PageData} from "@/assets/store/store";
import {leaderboardItemProps} from "@/assets/components/LeaderboardItem";

const initialState: PageData = {
    isAuthenticated: false,
    accessToken: '',
    basicAuthToken: 'Basic ZWQwZTU4NTktY2NlYS00ZWRhLWFlNTgtOGRkOTNmYWZhOWUxOjQyRDRBMmtVb2RWbHVRai1GQUdrZHhOWGlReUkwaVo4',
    projectId: 'ec77d6b3-4d48-4c2c-a1d4-f84f9dac7aaa',
    environmentId: '80206c0b-5c1b-428e-8935-1132903075c2',
    overallLeaderboard: [],
    seasonalLeaderboard: []
}
export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_PAGE_AUTHENTICATION':
            return {
                ...state, isAuthenticated: payload
            }
        case 'SET_ACCESS_TOKEN':
            return {
                ...state, accessToken: payload
            }
        case 'UPDATE_OVERALL_LEADERBOARD':
            return {
                ...state, overallLeaderboard: payload
            }
        case 'UPDATE_SEASONAL_LEADERBOARD':
            return {
                ...state, seasonalLeaderboard: payload
            }
    }
    return state;
}