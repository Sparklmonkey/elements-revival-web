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

    console.log('Authenticate');
    const [leaderboards] = await Promise.all([axios.post(
        'https://services.api.unity.com/auth/v1/token-exchange?projectId=ec77d6b3-4d48-4c2c-a1d4-f84f9dac7aaa&environmentId=80206c0b-5c1b-428e-8935-1132903075c2',
        {},
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': basicAuthToken
            }
        })
        .then(response => {
            const bearerToken = 'Bearer ' + response.data.accessToken;
            return bearerToken;
        }).then(async accessToken => {
            const leaderboard = await axios.post(
                'https://cloud-code.services.api.unity.com/v1/projects/ec77d6b3-4d48-4c2c-a1d4-f84f9dac7aaa/scripts/test-get-player',
                {
                    "params": {
                        "isOverall": false
                    }
                },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': accessToken
                    }
                }).then(response => {
                const seasonalLeaderboard: leaderboardItemProps[] = response.data.output.leaderboardResponse;
                return seasonalLeaderboard;
            })
            return {
                seasonalBoard: leaderboard,
                accessToken: accessToken
            }
        }).then(async seasonalResponse => {
            const response = await axios.post(
                'https://cloud-code.services.api.unity.com/v1/projects/ec77d6b3-4d48-4c2c-a1d4-f84f9dac7aaa/scripts/test-get-player',
                {
                    "params": {
                        "isOverall": true
                    }
                },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': seasonalResponse.accessToken
                    }
                }).then(response => {
                const overallBoard: leaderboardItemProps[] = response.data.output.leaderboardResponse;
                return {
                    seasonalBoard: seasonalResponse.seasonalBoard,
                    overallBoard: overallBoard
                }
            })
            return response;
        }).then(finalResponse => finalResponse)])
    return leaderboards;
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