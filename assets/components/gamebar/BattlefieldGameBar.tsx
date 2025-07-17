import * as React from "react";
import {Text, StyleSheet, View, ImageBackground, Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Caretdown from '@/assets/svg/caretdown';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/assets/store/store";
import {ReactUnityEventParameter} from "react-unity-webgl/distribution/types/react-unity-event-parameters";
import EtgButton from "@/assets/components/EtgButton";
import {useEffect} from "react";
import {updateAiName, updateAiTurnCount} from "@/assets/store/unityReducer";
import {useUnityContext} from "react-unity-webgl";


const BattlefieldGameBar = () => {
    const dispatch = useDispatch();
    const sendUnityMessage: (gameObjectName: string, methodName: string, parameter?: ReactUnityEventParameter) => void = useSelector((state: RootState) => state.unityData.messageSender);
    const aiTurnCount: number = useSelector((state: RootState) => state.unityData.aiTurnCount);
    const aiName: string = useSelector((state: RootState) => state.unityData.aiName);

    function updateAiUsername(aiName: string) {
        dispatch(updateAiName(aiName));
    }

    function setAiTurnCount(aiTurnCount: number) {
        dispatch(updateAiTurnCount(aiTurnCount));
    }

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
        <View style={styles.game}>
            <View style={styles.gameBar}>
                <Text style={styles.version553}>Version 5.5.3</Text>
                <EtgButton text={'Menu'} onPress={openMenu} />
                <EtgButton text={'DONE (Spacebar)'} onPress={endTurn} />
                <EtgButton text={'Action History'} onPress={openActionHistory} />
                <Text>{aiTurnCount}</Text>
                <EtgButton text={'Settings'} onPress={openSettings} />
                <Text>{aiName}</Text>
            </View>
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
export default BattlefieldGameBar;