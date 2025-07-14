import * as React from "react";
import {Text, StyleSheet, View, FlatList, ScrollView} from "react-native";
import SearchIcon from "@/assets/svg/SearchIcon";
import FilterIcon from "@/assets/svg/FilterIcon";
import LeaderboardItem, { leaderboardItemProps } from "@/assets/components/LeaderboardItem";
import LeaderboardHeader from "@/assets/components/LeaderboardHeader";
import NavBar from "@/assets/components/NavBar";
import Footer from "@/assets/components/Footer";
import {useEffect, useState} from "react";

const LeaderboardPage = () => {

    const leaderboardList = [
        {
            rank: 1,
            username: "TheGreat",
            overallScore: "1234",
            seasonScore: "1234",
            cardCollection: "1234",
            gold: "12134",
            wins: "1324",
            losses: "12",
        }, {
            rank: 2,
            username: "Serprex",
            overallScore: "1234",
            seasonScore: "1234",
            cardCollection: "1234",
            gold: "12134",
            wins: "1324",
            losses: "12",
        }, {
            rank: 3,
            username: "spex",
            overallScore: "1234",
            seasonScore: "1234",
            cardCollection: "1234",
            gold: "12134",
            wins: "1324",
            losses: "12",
        }, {
            rank: 4,
            username: "spex",
            overallScore: "1234",
            seasonScore: "1234",
            cardCollection: "1234",
            gold: "12134",
            wins: "1324",
            losses: "12",
        }, {
            rank: 5,
            username: "Buddy",
            overallScore: "1234",
            seasonScore: "1234",
            cardCollection: "1234",
            gold: "12134",
            wins: "1324",
            losses: "12",
        }
    ]

     useEffect(() =>  {
        sortLeaderboard();
    });

    useEffect(() => {
        getLeaderboard();
    }, [])
    function getLeaderboard() {
        return fetch('https://services.api.unity.com/auth/v1/token-exchange?projectId=ec77d6b3-4d48-4c2c-a1d4-f84f9dac7aaa&environmentId=80206c0b-5c1b-428e-8935-1132903075c2')
            .then(response => console.log(response.json()))
            .then(json => {
                return json
            })
            .catch(error => {
                console.error(error);
            });
    }
    const [leaderboardArray, setLeaderboardArray] = useState<leaderboardItemProps[]>([]);
    const [sortType, setSortType] = useState<keyof leaderboardItemProps>("username");
    const [isDescending, setIsDescending] = useState<boolean>(true);

    const updateSortType = (sortType: string) => {
        setIsDescending((sortType as keyof leaderboardItemProps) === sortType ? !isDescending : true);
        setSortType(sortType as keyof leaderboardItemProps);
    }

    const sortLeaderboard = (leaboardParam: leaderboardItemProps[] = leaderboardList) => {
        const sortArray = [...leaboardParam].sort((a: leaderboardItemProps, b: leaderboardItemProps) => {
            if (isDescending) {
                if (a[sortType] > b[sortType]) return 1;
                else if (b[sortType] > a[sortType]) return -1;
                return 0;
            } else {
                if (a[sortType] > b[sortType]) return -1;
                else if (b[sortType] > a[sortType]) return 1;
                return 0;
            }
        });

        setLeaderboardArray(sortArray);
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <NavBar/>
                    <View style={[styles.view, styles.viewSpaceBlock]}>
                        <Text style={styles.leaderboard}>Leaderboard</Text>
                        <View style={styles.searchBarParent}>
                            <View style={[styles.searchBar, styles.searchBorder]}>
                                <SearchIcon width={20} height={20}/>
                                <Text style={[styles.searchByUsername, styles.filterTypo]}>Search by username</Text>
                            </View>
                            <View style={[styles.searchBar1, styles.searchBorder]}>
                                <FilterIcon style={styles.arrowsdownupIcon} width={20} height={20}/>
                                <Text style={[styles.filter, styles.filterTypo]}>Filter</Text>
                            </View>
                        </View>
                        <View style={styles.text}>
                            <View style={[styles.textParent, styles.titleFlexBox]}>
                                <View style={[styles.text1, styles.textFlexBox]}>
                                    <LeaderboardHeader updateOrderBy={updateSortType} />
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
        fontFamily: "Gill Sans",
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
        fontFamily: "Gill Sans",
        fontWeight: "600"
    },
    titleChildLayout: {
        overflow: "hidden"
    },
    leaderboard: {
        fontSize: 28,
        color: "#ebf166",
        textAlign: "center",
        fontFamily: "Gill Sans",
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
        fontFamily: "Gill Sans",
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
