import * as React from "react";
import {Text, StyleSheet, View, ImageBackground, Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Caretdown from '@/assets/svg/caretdown';
import {useSelector} from "react-redux";
import {RootState} from "@/assets/store/store";
import {ReactUnityEventParameter} from "react-unity-webgl/distribution/types/react-unity-event-parameters";
import EtgButton from "@/assets/components/EtgButton";


const LoginGameBar = () => {
    const sendUnityMessage: (gameObjectName: string, methodName: string, parameter?: ReactUnityEventParameter) => void = useSelector((state: RootState) => state.unityData.messageSender);

    function openSettings() {
        sendUnityMessage("LoginReactReceiver", "ToggleSettingsPanel");
    }

    function loginToTrainerAccount() {
        sendUnityMessage("LoginReactReceiver", "LoginToTrainerAccount");
    }

    return (
        <View style={styles.game}>
            <View style={styles.gameBar}>
                <Text style={styles.version553}>Version 5.5.3</Text>
                <EtgButton text={'Trainer'} onPress={loginToTrainerAccount} />
                <EtgButton text={'Settings'} onPress={openSettings} />
                <ImageBackground style={styles.buttonIcon} resizeMode="stretch" source={require("../../images/button.png")}>
                    <Text style={styles.trainer}>Game Rules</Text>
                </ImageBackground>
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
export default LoginGameBar;