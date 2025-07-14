import {leaderboardItemProps} from "@/assets/components/LeaderboardItem";

export const pageAuthenticated = () => {
    return {
        type: 'SET_PAGE_AUTHENTICATION',
        payload: true
    }
}

export const updateAccessToken = (accessToken: string) => {
    return {
        type: 'SET_ACCESS_TOKEN',
        payload: accessToken,
    }
}

export const updateOverallLeaderboard = (leaderboardArray: leaderboardItemProps[]) => {
    return {
        type: 'UPDATE_OVERALL_LEADERBOARD',
        payload: leaderboardArray,
    }
}

export const updateSeasonalLeaderboard = (leaderboardArray: leaderboardItemProps[]) => {
    return {
        type: 'UPDATE_SEASONAL_LEADERBOARD',
        payload: leaderboardArray,
    }
}