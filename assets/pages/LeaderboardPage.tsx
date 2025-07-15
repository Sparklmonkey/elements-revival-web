import * as React from "react";
import {Text, StyleSheet, View, FlatList, ScrollView} from "react-native";
import LeaderboardItem, {leaderboardItemProps} from "@/assets/components/LeaderboardItem";
import LeaderboardHeader from "@/assets/components/LeaderboardHeader";
import NavBar from "@/assets/components/NavBar";
import Footer from "@/assets/components/Footer";
import {useEffect, useState} from "react";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import LeaderboardSearchBar from "@/assets/components/LeaderboardSearchBar";
import {RootState} from "@/assets/store/store";
import {
    setAccessToken,
    setAuthenticated,
    setOverallLeaderboard,
    setSeasonalLeaderboard
} from "@/assets/store/pageReducer";

const LeaderboardPage = () => {

    const basicAuthToken: string = useSelector((state: RootState) => state.pageData.basicAuthToken);
    const accessToken: string = useSelector((state: RootState) => state.pageData.accessToken);
    const overallBoard: leaderboardItemProps[] = useSelector((state: RootState) => state.pageData.overallLeaderboard);
    const seasonalBoard: leaderboardItemProps[] = useSelector((state: RootState) => state.pageData.seasonalLeaderboard);
    const dispatch = useDispatch();

    useEffect(() => {
        authenticate()
            .then(bearerToken => {
                getLeaderboardData(bearerToken ?? "", true).then(response => {
                    setLeaderboardArray(response.output.leaderboardResponse);
                    dispatch(setOverallLeaderboard(response.output.leaderboardResponse));
                    getLeaderboardData(bearerToken ?? "", false).then(response => {
                        dispatch(setSeasonalLeaderboard(response.output.leaderboardResponse));
                    })
                });
            });
    }, []);

    async function getScoreboardByUsername(username: string) {
        const userData = leaderboardArray.find(item => item.username === username);
        if (userData) {
            setLeaderboardArray([userData]);
        } else {
            setLeaderboardArray(overallBoard);
            alert("No user data found.");
        }
    }

    function changeLeaderboard(isOverall: boolean) {
        if (isOverall) {
            setLeaderboardArray(overallBoard);
        } else {
            setLeaderboardArray(seasonalBoard);
        }
    }
    async function getLeaderboardData(bearerToken: string, isOverall: boolean) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': bearerToken
        }
        try {
            const {data} = await axios.post(
                'https://cloud-code.services.api.unity.com/v1/projects/ec77d6b3-4d48-4c2c-a1d4-f84f9dac7aaa/scripts/test-get-player',
                {
                    "params": {
                        "isOverall": isOverall
                    }
                },
                {headers: headers});
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async function authenticate() {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': basicAuthToken
        }
        try {
            const {data} = await axios.post(
                'https://services.api.unity.com/auth/v1/token-exchange?projectId=ec77d6b3-4d48-4c2c-a1d4-f84f9dac7aaa&environmentId=80206c0b-5c1b-428e-8935-1132903075c2',
                {},
                {headers: headers});
            const bearerToken = 'Bearer ' + data.accessToken;
            dispatch(setAccessToken(bearerToken));
            dispatch(setAuthenticated());
            return bearerToken;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const [leaderboardArray, setLeaderboardArray] = useState<leaderboardItemProps[]>([]);
    const [sortType, setSortType] = useState<keyof leaderboardItemProps>("username");
    const [isDescending, setIsDescending] = useState<boolean>(true);

    function updateSortType (newType: string) {
        const newDescending: boolean = (newType as keyof leaderboardItemProps) === sortType ? !isDescending : true;
        setIsDescending(newDescending);
        setSortType(newType as keyof leaderboardItemProps);
        sortLeaderboard(newType as keyof leaderboardItemProps, newDescending);
    }

    function sortLeaderboard(newType: keyof leaderboardItemProps, newDescending: boolean) {
        let sortArray: leaderboardItemProps[] = [];
        if (newType === 'username') {
            sortArray = leaderboardArray.sort((a, b) => a.username.localeCompare(b.username));
            if (!newDescending) {
                sortArray = sortArray.reverse();
            }
        } else {
            sortArray = leaderboardArray.sort((a, b) => a[newType] > b[newType] ? 1 : -1)
            if (!newDescending) {
                sortArray = sortArray.reverse();
            }
        }
        setLeaderboardArray(sortArray);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <NavBar />
                <View style={[styles.view, styles.viewSpaceBlock]}>
                    <Text style={styles.leaderboard}>Leaderboard</Text>
                    <Text style={styles.leaderboard}>Due to technical limitation, the leaderboard can only show the top 50 of each category.</Text>
                    <LeaderboardSearchBar leaderboardType={changeLeaderboard} searchByUsername={getScoreboardByUsername} />
                    <View style={styles.text}>
                        <View style={[styles.textParent, styles.titleFlexBox]}>
                            <View style={[styles.text1, styles.textFlexBox]}>
                                <LeaderboardHeader updateOrderBy={updateSortType}/>
                            </View>
                            <View style={styles.textGroup}>
                                <FlatList
                                    contentContainerStyle={{gap: 8}}
                                    data={leaderboardArray}
                                    renderItem={({item}) => <LeaderboardItem {...item}  />}
                                    keyExtractor={item => item.rank.toString()}/>
                            </View>
                        </View>
                    </View>
                </View>
                <Footer/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    aboutGame: {
        backgroundColor: "rgba(80, 33, 4, 0.25)",
        flex: 1
    },
    viewSpaceBlock: {
        padding: 24,
        marginHorizontal: 36,
        borderRadius: 16
    },
    searchBorder: {
        gap: 8,
        padding: 12,
        borderColor: "#d5ce7b",
        borderRadius: 8,
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "row",
        borderWidth: 2,
        borderStyle: "solid"
    },
    container: {
        height: 250,
        width: '100%',
        backgroundColor: "rgba(50, 17, 0, 1)",
        flex: 1
    },
    filterTypo: {
        textAlign: "left",
        fontSize: 16,
        fontFamily: "gillSans",
        fontWeight: "600"
    },
    titleFlexBox: {
        gap: 24,
        alignSelf: "stretch"
    },
    textFlexBox: {
        paddingHorizontal: 6,
        justifyContent: "center",
        borderRadius: 8,
        alignSelf: "stretch"
    },
    parentSpaceBlock: {
        backgroundColor: 'white',
        width: 150,
        paddingVertical: 16,
        paddingHorizontal: 0,
        gap: 8,
        alignItems: "center",
        flexDirection: "row",
        flex: 1
    },
    textTypo: {
        color: "#fff",
        lineHeight: 20,
        letterSpacing: 0.2,
        textAlign: "left",
        fontSize: 16,
        fontFamily: "gillSans",
        fontWeight: "600"
    },
    titleChildLayout: {
        overflow: "hidden"
    },
    leaderboard: {
        fontSize: 28,
        color: "#ebf166",
        textAlign: "center",
        fontFamily: "gillSans",
        fontWeight: "600",
        alignSelf: "stretch"
    },
    subtitle: {
        fontSize: 20,
        color: "#ebf166",
        textAlign: "center",
        fontFamily: "gillSans",
        fontWeight: "600",
        alignSelf: "stretch"
    },
    searchByUsername: {
        color: "#d38030"
    },
    searchBar: {
        width: 480,
        backgroundColor: "rgba(213, 206, 123, 0.15)"
    },
    arrowsdownupIcon: {
        overflow: "hidden"
    },
    filter: {
        color: "#3d2c21"
    },
    searchBar1: {
        backgroundColor: "#d5ce7b"
    },
    searchBarParent: {
        justifyContent: "space-between",
        gap: 0,
        flexDirection: "row",
        alignSelf: "stretch"
    },
    rank: {
        width: 70,
        color: "#d5ce7b",
        lineHeight: 20,
        letterSpacing: 0.2,
        textAlign: "left",
        fontSize: 16,
        fontFamily: "gillSans",
        fontWeight: "600"
    },
    caretupdownIcon: {},
    usernameParent: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 0
    },
    title: {
        alignItems: "center",
        gap: 24,
        flexDirection: "row",
    },
    text1: {
        paddingHorizontal: 16,
        paddingVertical: 0
    },
    text2: {
        padding: 16,
        backgroundColor: "transparent"
    },
    titleChild: {
        borderRadius: 100
    },
    textGroup: {
        gap: 16,
        alignSelf: "stretch"
    },
    textParent: {
        backgroundColor: "#3d2c21",
        padding: 24,
        borderRadius: 16,
        gap: 24
    },
    text: {
        alignSelf: "stretch"
    },
    view: {
        margin: 32,
        borderColor: "#d38030",
        gap: 32,
        borderWidth: 2,
        borderStyle: "solid",
        padding: 24,
        borderRadius: 16,
        backgroundColor: "rgba(80, 33, 4, 0.25)",
        flex: 1
    }
});

export default LeaderboardPage;
