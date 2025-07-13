import {StyleSheet, View, Text} from "react-native";
import OrderByIcon from "@/assets/svg/OrderByIcon";

const LeaderboardHeader = () => {

    return (
        <View style={[styles.title]}>
            <View style={styles.rankContainer}>
                <Text style={styles.rank}>Rank</Text>
                <OrderByIcon width={16} height={16}/>
            </View>
            <View style={[styles.usernameParent, styles.parentSpaceBlock]}>
                <Text style={styles.otherHeader}>Username</Text>
                <OrderByIcon width={16} height={16}/>
            </View>
            <View style={styles.parentSpaceBlock}>
                <Text style={styles.otherHeader}>Overall Score</Text>
                <OrderByIcon width={16} height={16}/>
            </View>
            <View style={styles.parentSpaceBlock}>
                <Text style={styles.otherHeader}>Season Score</Text>
                <OrderByIcon width={16} height={16}/>
            </View>
            <View style={styles.parentSpaceBlock}>
                <Text style={styles.otherHeader}>Card Collection</Text>
                <OrderByIcon width={16} height={16}/>
            </View>
            <View style={styles.parentSpaceBlock}>
                <Text style={styles.otherHeader}>Gold</Text>
                <OrderByIcon width={16} height={16}/>
            </View>
            <View style={styles.parentSpaceBlock}>
                <Text style={styles.otherHeader}>Wins</Text>
                <OrderByIcon width={16} height={16}/>
            </View>
            <View style={styles.parentSpaceBlock}>
                <Text style={styles.otherHeader}>Losses</Text>
                <OrderByIcon width={16} height={16}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    usernameParent: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 0
    },
    title: {
        alignContent: 'space-between',
        height: 32,
        alignItems: "center",
        gap: 24,
        flexDirection: "row",
    },
    rankContainer: {
        borderWidth: 2,
        borderColor: "#d5ce7ba0",
        borderRadius: 16,
        width: "6%",
        paddingVertical: 8,
        paddingHorizontal: 0,
        gap: 8,
        alignItems: "center",
        flexDirection: "row",
    },
    parentSpaceBlock: {
        borderWidth: 2,
        borderColor: "#d5ce7ba0",
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 8,
        alignItems: "center",
        width: "12%",
        flexDirection: "row",
        justifyContent: "center",
    },
    rank: {
        width: 70,
        color: "#d5ce7b",
        lineHeight: 20,
        letterSpacing: 0.2,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Gill Sans",
        fontWeight: "600"
    },
    otherHeader: {
        width: "100%",
        color: "#d5ce7b",
        lineHeight: 20,
        letterSpacing: 0.2,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Gill Sans",
        fontWeight: "600"
    },
});

export default LeaderboardHeader;