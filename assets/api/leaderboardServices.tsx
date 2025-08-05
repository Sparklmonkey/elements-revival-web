import axios from "axios";
import {
    setAccessToken,
    setAuthenticated,
    setOverallLeaderboard,
    setSeasonalLeaderboard
} from "@/assets/store/pageReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/assets/store/store";
import {leaderboardItemProps} from "@/assets/components/LeaderboardItem";
import {Dispatch, UnknownAction} from "redux";

const baseUrl = "https://elementstherevival.com/api/";

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

export async function getLeaderboardLegacy(basicAuthToken: string) {
    const leaderboards = await axios.get(
        'http://localhost:8080/api/leaderboards',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    console.log(leaderboards.data);
    return leaderboards.data;
}

export const sortLeaderboardArray = (arrayToSort: leaderboardItemProps[], newType: keyof leaderboardItemProps, isDescending: boolean) => {
    let sortArray: leaderboardItemProps[] = [];
    if (newType === 'username') {
        sortArray = arrayToSort.sort((a, b) => a.username.localeCompare(b.username));
        if (isDescending) {
            sortArray = sortArray.reverse();
        }
    } else {
        sortArray = arrayToSort.sort((a, b) => a[newType] > b[newType] ? 1 : -1)
        if (isDescending) {
            sortArray = sortArray.reverse();
        }
    }
    return sortArray;
}