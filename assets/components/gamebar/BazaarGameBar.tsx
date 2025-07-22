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


const BazaarGameBar = () => {
    const sendUnityMessage: (gameObjectName: string, methodName: string, parameter?: ReactUnityEventParameter) => void = useSelector((state: RootState) => state.unityData.messageSender);

    function openSettings() {
        sendUnityMessage("DeckManagementReactReceiver", "ToggleSettingsPanel");
    }

    function goToDashboard() {
        sendUnityMessage("DeckManagementReactReceiver", "GoToDashboard");
    }

    function goToDeckManagement() {
        sendUnityMessage("DeckManagementReactReceiver", "GoToDeckManagement");
    }

    return (
            <View style={styles.gameBar}>
                <Text style={styles.version553}>Version 5.5.3</Text>
                <EtgButton text={'Main Menu'} onPress={goToDashboard} />
                <EtgButton text={'Manage Deck'} onPress={goToDeckManagement} />
                <Text>BAZAAR: Roll over a card to see its buy/sell prince. Click on a card to buy or sell it.</Text>
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
export default BazaarGameBar;