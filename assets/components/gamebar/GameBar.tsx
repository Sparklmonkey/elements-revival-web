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
    game: {
        zIndex: 3,
        gap: 24,
        width: '75%',
        marginVertical: 150,
    },
});
export default GameBar;