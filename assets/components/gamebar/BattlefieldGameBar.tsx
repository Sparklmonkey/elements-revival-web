import * as React from "react";
import {Text, StyleSheet, View} from "react-native";
import { useSelector} from "react-redux";
import {RootState} from "@/assets/store/store";
import {ReactUnityEventParameter} from "react-unity-webgl/distribution/types/react-unity-event-parameters";
import EtgButton from "@/assets/components/EtgButton";


const BattlefieldGameBar = () => {
    const sendUnityMessage: (gameObjectName: string, methodName: string, parameter?: ReactUnityEventParameter) => void = useSelector((state: RootState) => state.unityData.messageSender);
    const aiTurnCount: number = useSelector((state: RootState) => state.unityData.aiTurnCount);
    const aiName: string = useSelector((state: RootState) => state.unityData.aiName);

    function openSettings() {
        sendUnityMessage("BattlefieldReactReceiver", "ToggleSettingsPanel");
    }

    function endTurn() {
        sendUnityMessage("BattlefieldReactReceiver", "ResetAccount");
    }

    function openMenu() {
        sendUnityMessage("BattlefieldReactReceiver", "AccountInfo");
    }

    function openActionHistory() {
        sendUnityMessage("BattlefieldReactReceiver", "Logout");
    }

    return (
            <View style={styles.gameBar}>
                <Text style={styles.version553}>Version 5.5.3</Text>
                <EtgButton text={'Menu'} onPress={openMenu} />
                <EtgButton text={'DONE (Spacebar)'} onPress={endTurn} />
                <EtgButton text={'Action History'} onPress={openActionHistory} />
                <Text>{aiTurnCount}</Text>
                <EtgButton text={'Settings'} onPress={openSettings} />
                <Text>{aiName}</Text>
            </View>
    );
};

const styles = StyleSheet.create({
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
export default BattlefieldGameBar;