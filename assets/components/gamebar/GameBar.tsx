import * as React from "react";
import {Text, StyleSheet, View, ImageBackground, Image, TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "@/assets/store/store";
import LoginGameBar from "@/assets/components/gamebar/LoginGameBar";
import DashboardGameBar from "@/assets/components/gamebar/DashboardGameBar";
import BattlefieldGameBar from "@/assets/components/gamebar/BattlefieldGameBar";
import DeckManagementGameBar from "@/assets/components/gamebar/DeckManagementGameBar";
import BazaarGameBar from "@/assets/components/gamebar/BazaarGameBar";

type GameBarProps = {
    screenName: string;
}

function GetGameBar({ screenName }: GameBarProps) {
    switch (screenName) {
        case "NewLoginScreen":
            return (<LoginGameBar />);
        case "LoginScreen":
            return (<LoginGameBar />);
        case "Dashboard":
            return (<DashboardGameBar />);
        case "Battlefield":
            return (<BattlefieldGameBar />);
        case "DeckManagement":
            return (<DeckManagementGameBar />);
        case "Bazaar":
            return (<BazaarGameBar />);
    }
    return null;
}

const GameBar = () => {
    const screenName: string = useSelector((state: RootState) => state.unityData.screenName);

    return (
        <View style={styles.game}>
            <GetGameBar screenName={screenName} />
        </View>
    );
};
const styles = StyleSheet.create({
    trainer: {
        fontSize: 12,
        textAlign: "left",
        fontFamily: "dauphin",
        color: '#EBF166',
    },
    buttonIcon: {
        width: 120,
        height: 26,
        paddingVertical: 9,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    game: {
        zIndex: 3,
        gap: 24,
        width: '75%',
        marginTop: 50,
    },
    gameBar: {
        backgroundColor: "#411b00",
        paddingHorizontal: 24,
        paddingVertical: 12,
        gap: 16,
        borderWidth: 2,
        borderColor: "#d38030",
        borderRadius: 12,
        flexDirection: "row",
        alignSelf: "stretch",
        borderStyle: "solid",
        alignItems: "center",
        overflow: "hidden"
    },
    version553: {
        letterSpacing: 1.4,
        fontFamily: "dauphin",
        textAlign: "left",
        fontSize: 18,
        color: '#EBF166',
        flex: 1
    },
});
export default GameBar;