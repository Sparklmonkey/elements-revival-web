import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import SearchIcon from "@/assets/svg/SearchIcon";
import FilterIcon from "@/assets/svg/FilterIcon";
import * as React from "react";
import {useState} from "react";

type LeaderboardSearchBarProps = {
    leaderboardType: (isOverall: boolean) => void
    searchByUsername: (username: string) => void
}

const LeaderboardSearchBar = (props: LeaderboardSearchBarProps) => {

    const [searchText, setsearchText] = useState<string>("");

    return (
        <View style={styles.searchBarParent}>
            <View style={styles.searchBar}>
                <TouchableOpacity>
                    <SearchIcon width={20} height={20}/>
                </TouchableOpacity>
                <TextInput
                    onSubmitEditing={() => props.searchByUsername(searchText)}
                style={[styles.searchByUsername, ({ outlineStyle: 'none' } as any)]}
                onChangeText={setsearchText}
                value={searchText}
                placeholder="Search by username"
                keyboardType="default"
                />
            </View>
            <View style={styles.leaderboardTypeContainer}>
                <TouchableOpacity style={styles.leaderboardTypeButton} onPress={() => props.leaderboardType(true)}>
                    <Text style={styles.leaderboardTypeText}>Overall</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.leaderboardTypeButton} onPress={() => props.leaderboardType(false)}>
                    <Text style={styles.leaderboardTypeText}>Seasonal</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.filterButton}>
                <FilterIcon style={styles.arrowsdownupIcon} width={20} height={20}/>
                <Text style={styles.filter}>Filter</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarParent: {
        justifyContent: "space-between",
        gap: 0,
        flexDirection: "row",
        alignSelf: "stretch"
    },
    searchBar: {
        width: '20%',
        backgroundColor: "rgba(213, 206, 123, 0.15)",
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
    searchByUsername: {
        color: "#d38030",
        textAlign: "left",
        fontSize: 16,
        fontFamily: "gillSans",
        fontWeight: "600",
        flex: 1,
    },
    filterButton: {
        backgroundColor: "#d5ce7b",
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
    arrowsdownupIcon: {
        overflow: "hidden"
    },
    leaderboardTypeContainer: {
        flex: 1,
        justifyContent: "center",
        gap: 12,
        flexDirection: "row",
        alignSelf: "stretch"
    },
    filter: {
        color: "#3d2c21",
        textAlign: "left",
        fontSize: 16,
        fontFamily: "gillSans",
        fontWeight: "600"
    },
    leaderboardTypeButton: {
        width: "25%",
        backgroundColor: "#d5ce7b",
        gap: 8,
        padding: 6,
        borderColor: "#d5ce7b",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flexDirection: "row",
        borderWidth: 2,
        borderStyle: "solid"
    },
    leaderboardTypeText: {
        color: "#3d2c21",
        textAlign: "center",
        fontSize: 20,
        fontFamily: "dauphin",
        fontWeight: "600"
    },
});

export default LeaderboardSearchBar;