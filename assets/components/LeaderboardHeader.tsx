import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import OrderByIcon from "@/assets/svg/OrderByIcon";
import {leaderboardItemProps} from "@/assets/components/LeaderboardItem";
import {Dispatch, SetStateAction} from "react";

interface LeaderboardHeaderProps {
    updateOrderBy: (sortType: string) => void;
};

const LeaderboardHeader = (props:LeaderboardHeaderProps) => {

    return (
        <View style={[styles.title]}>
                <TouchableOpacity style={styles.parentSpaceBlock} onPress={() => props.updateOrderBy("rank")}>
                <Text style={styles.headerText}>Rank</Text>
                <OrderByIcon width={16} height={16}/>
            </TouchableOpacity>
                <TouchableOpacity style={styles.parentSpaceBlock} onPress={() => props.updateOrderBy("username")}>
                  <Text style={styles.headerText}>Username</Text>
                   <OrderByIcon width={16} height={16}/>
                 </TouchableOpacity>
                <TouchableOpacity style={styles.parentSpaceBlock} onPress={() => props.updateOrderBy("overallScore")}>
                    <Text style={styles.headerText}>Overall Score</Text>
                    <OrderByIcon width={16} height={16}/>
                </TouchableOpacity>
            <TouchableOpacity style={styles.parentSpaceBlock} onPress={() => props.updateOrderBy("seasonScore")}>
                <Text style={styles.headerText}>Season Score</Text>
                <OrderByIcon width={16} height={16}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.parentSpaceBlock} onPress={() => props.updateOrderBy("cardCollection")}>
                <Text style={styles.headerText}>Card Collection</Text>
                <OrderByIcon width={16} height={16}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.parentSpaceBlock} onPress={() => props.updateOrderBy("gold")}>
                <Text style={styles.headerText}>Gold</Text>
                <OrderByIcon width={16} height={16}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.parentSpaceBlock} onPress={() => props.updateOrderBy("wins")}>
                <Text style={styles.headerText}>Wins</Text>
                <OrderByIcon width={16} height={16}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.parentSpaceBlock} onPress={() => props.updateOrderBy("losses")}>
                <Text style={styles.headerText}>Losses</Text>
                <OrderByIcon width={16} height={16}/>
            </TouchableOpacity>
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
        width: '100%',
        alignContent: 'space-between',
        alignItems: "center",
        gap: 8,
        flexDirection: "row",
    },
    rankContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: "#d5ce7ba0",
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 8,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    parentSpaceBlock: {
        width: '10%',
        borderWidth: 2,
        borderColor: "#d5ce7ba0",
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        gap: 8,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
    },
    headerText: {
        width: "100%",
        color: "#d5ce7b",
        lineHeight: 20,
        letterSpacing: 0.2,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "gillSans",
        fontWeight: "600"
    },
});

export default LeaderboardHeader;