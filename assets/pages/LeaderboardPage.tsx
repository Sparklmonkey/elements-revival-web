import * as React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";
import WebLinearGradient from 'react-native-web-linear-gradient';
import SearchIcon from "@/assets/svg/SearchIcon";
import FilterIcon from "@/assets/svg/FilterIcon";
import OrderByIcon from "@/assets/svg/OrderByIcon";
import LeaderboardFirstPlaceIcon from "@/assets/svg/LeaderboardFirstPlaceIcon";
import LeaderboardSecondPlaceIcon from "@/assets/svg/LeaderboardSecondPlaceIcon";
import LeaderboardThirdPlaceIcon from "@/assets/svg/LeaderboardThirdPlaceIcon";
import LeaderboardItem from "@/assets/components/LeaderboardItem";
import LeaderboardHeader from "@/assets/components/LeaderboardHeader";
import GameRuleItem from "@/assets/components/GameRuleItem";

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
        },{
            rank: 2,
            username: "Serprex",
            overallScore: "1234",
            seasonScore: "1234",
            cardCollection: "1234",
            gold: "12134",
            wins: "1324",
            losses: "12",
        },{
            rank: 3,
            username: "spex",
            overallScore: "1234",
            seasonScore: "1234",
            cardCollection: "1234",
            gold: "12134",
            wins: "1324",
            losses: "12",
        }
    ]
    const leaderboardItem = {
        rank: 3,
        username: "TheGreat",
        overallScore: "1234",
        seasonScore: "1234",
        cardCollection: "1234",
        gold: "12134",
        wins: "1324",
        losses: "12",
    }

    return (
            <View style={[styles.view, styles.viewSpaceBlock]}>
                <Text style={styles.leaderboard}>Leaderboard</Text>
                <View style={styles.searchBarParent}>
                    <View style={[styles.searchBar, styles.searchBorder]}>
                        <SearchIcon width={20} height={20} />
                        <Text style={[styles.searchByUsername, styles.filterTypo]}>Search by username</Text>
                    </View>
                    <View style={[styles.searchBar1, styles.searchBorder]}>
                        <FilterIcon style={styles.arrowsdownupIcon} width={20} height={20} />
                        <Text style={[styles.filter, styles.filterTypo]}>Filter</Text>
                    </View>
                </View>
                <View style={styles.text}>
                    <View style={[styles.textParent, styles.titleFlexBox]}>
                        <View style={[styles.text1, styles.textFlexBox]}>
                            <LeaderboardHeader />
                        </View>
                        <View style={styles.textGroup}>
                            <FlatList
                                contentContainerStyle={{ gap: 16 }}
                                data={leaderboardList}
                                renderItem={({item}) => <LeaderboardItem {...item}  />}
                                keyExtractor={item => item.rank.toString()} />
                        </View>
                    </View>
                </View>
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
        width: "100%",
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
