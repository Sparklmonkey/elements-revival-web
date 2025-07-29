import * as React from "react";
import {Text, StyleSheet, View, FlatList, ScrollView} from "react-native";
import LeaderboardItem, {leaderboardItemProps} from "@/assets/components/LeaderboardItem";
import LeaderboardHeader from "@/assets/components/LeaderboardHeader";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import LeaderboardSearchBar from "@/assets/components/LeaderboardSearchBar";
import {RootState} from "@/assets/store/store";
import BaseContainer from "@/assets/components/BaseContainer";
import {getLeaderboardLegacy, sortLeaderboardArray} from "@/assets/api/leaderboardServices";
import {setOverallLeaderboard, setSeasonalLeaderboard} from "@/assets/store/pageReducer";

const LeaderboardPage = () => {

    const basicAuthToken: string = useSelector((state: RootState) => state.pageData.basicAuthToken);
    const overallBoard: leaderboardItemProps[] = useSelector((state: RootState) => state.pageData.overallLeaderboard);
    const seasonalBoard: leaderboardItemProps[] = useSelector((state: RootState) => state.pageData.seasonalLeaderboard);
    const dispatch = useDispatch();

    useEffect(() => {
        getLeaderboardLegacy(basicAuthToken).then(response => {
                console.log('getLeaderboardLegacy');
                dispatch(setSeasonalLeaderboard(response.seasonalBoard));
                dispatch(setOverallLeaderboard(response.overallBoard));
                console.log(response.overallBoard);
                setLeaderboardArray(response.overallBoard);
            }
        );
    }, [basicAuthToken, dispatch]);

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

    const [leaderboardArray, setLeaderboardArray] = useState<leaderboardItemProps[]>([]);
    const [sortType, setSortType] = useState<keyof leaderboardItemProps>("username");
    const [isDescending, setIsDescending] = useState<boolean>(true);

    function updateSortType(newType: string) {
        const newDescending: boolean = (newType as keyof leaderboardItemProps) === sortType ? !isDescending : true;
        setIsDescending(newDescending);
        setSortType(newType as keyof leaderboardItemProps);
        let sortedArray = sortLeaderboardArray(leaderboardArray, newType as keyof leaderboardItemProps, newDescending);
        setLeaderboardArray(sortedArray);
    }

    return (
        <BaseContainer>
            <View style={styles.view}>
                <Text style={styles.leaderboard}>Leaderboard</Text>
                <Text style={styles.leaderboard}>Due to technical limitation, the leaderboard can only show the top 50
                    of each category.</Text>
                <LeaderboardSearchBar leaderboardType={changeLeaderboard} searchByUsername={getScoreboardByUsername}/>
                <View style={styles.text}>
                    <View style={[styles.textParent, styles.titleFlexBox]}>
                        <View style={[styles.text1, styles.subtitle]}>
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

        </BaseContainer>
    );
};

const styles = StyleSheet.create({
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
    text1: {
        paddingHorizontal: 16,
        paddingVertical: 0
    },
    textGroup: {
        maxHeight: 450,
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
        width: "80%",
        marginVertical: 32,
        borderColor: "#d38030",
        gap: 32,
        borderWidth: 2,
        borderStyle: "solid",
        padding: 24,
        borderRadius: 16,
        backgroundColor: "rgba(80, 33, 4, 0.25)",
        flex: 1,
    }
});

export default LeaderboardPage;
