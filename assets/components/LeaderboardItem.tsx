import {StyleSheet, Text, View} from "react-native";
import LeaderboardFirstPlaceIcon from "@/assets/svg/LeaderboardFirstPlaceIcon";
import WebLinearGradient from 'react-native-web-linear-gradient';
import * as React from "react";
import LeaderboardSecondPlaceIcon from "@/assets/svg/LeaderboardSecondPlaceIcon";
import LeaderboardThirdPlaceIcon from "@/assets/svg/LeaderboardThirdPlaceIcon";

export type leaderboardItemProps = {
    rank: number;
    username: string;
    overallScore: string;
    seasonScore: string;
    cardCollection: string;
    gold: string;
    wins: string;
    losses: string;
}

const LeaderboardItem = (props: leaderboardItemProps) => {

    return (
        <WebLinearGradient style={styles.gradientContainer} locations={[0, 1]}
                           colors={["rgba(255, 255, 255, 0.05)", "#97854b"]} useAngle={true} angle={-90}>
            <View style={styles.container}>
                <View style={styles.rankContainer}>
                    { props.rank == 1 ?
                        <LeaderboardFirstPlaceIcon style={styles.rank} width={60} height={40}/>
                        : props.rank == 2 ? <LeaderboardSecondPlaceIcon style={styles.rank} width={60} height={40}/>
                            : props.rank == 3 ? <LeaderboardThirdPlaceIcon style={styles.rank} width={60} height={40}/>
                                : <Text style={styles.otherHeader}>{props.rank}</Text>

                    }
                </View>
                <View style={styles.parentSpaceBlock}>
                    <Text style={styles.otherHeader}>{props.username}</Text>
                </View>
                <View style={styles.parentSpaceBlock}>
                    <Text style={styles.otherHeader}>{props.overallScore}</Text>
                </View>
                <View style={styles.parentSpaceBlock}>
                    <Text style={styles.otherHeader}>{props.seasonScore}</Text>
                </View>
                <View style={styles.parentSpaceBlock}>
                    <Text style={styles.otherHeader}>{props.cardCollection}</Text>
                </View>
                <View style={styles.parentSpaceBlock}>
                    <Text style={styles.otherHeader}>{props.gold}</Text>
                </View>
                <View style={styles.parentSpaceBlock}>
                    <Text style={styles.otherHeader}>{props.wins}</Text>
                </View>
                <View style={styles.parentSpaceBlock}>
                    <Text style={styles.otherHeader}>{props.losses}</Text>
                </View>
            </View>
        </WebLinearGradient>
    );
};

const styles = StyleSheet.create({
    rankContainer: {
        width: "10%",
        paddingVertical: 8,
        paddingHorizontal: 0,
        gap: 8,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    rank: {
        width: 70,
        overflow: "hidden"
    },
    parentSpaceBlock: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 8,
        alignItems: "center",
        width: "10%",
        flexDirection: "row",
        justifyContent: "center",
    },
    gradientContainer: {
        padding: 16,
        backgroundColor: "transparent",
        justifyContent: "center",
        borderRadius: 8,
    },
    container: {
        alignItems: "center",
        alignContent: "space-evenly",
        gap: 24,
        flexDirection: "row",
    },
    otherHeader: {
        width: "100%",
        color: "#fff",
        lineHeight: 20,
        letterSpacing: 0.2,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Gill Sans",
        fontWeight: "600"
    },
    text: {
        flex: 1,
        color: "#fff",
        lineHeight: 20,
        letterSpacing: 0.2,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Gill Sans",
        fontWeight: "600"
    },
});

export default LeaderboardItem;