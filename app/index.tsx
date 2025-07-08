import {Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from "@expo/config-plugins/build/android";
import EtgButton from "@/assets/components/EtgButton";
import NavBar from "@/assets/components/NavBar";
import BackgroundDragon from "@/assets/components/BackgroundDragon";
import Container from "@/assets/components/MainPage";

export default function Index() {
    return (
        <ScrollView>
            <Container />
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        flexDirection: "row",
        backgroundColor: '#321100',
        borderStyle: 'solid',
        borderColor: '#665533',
        borderBottomWidth: 2,
        paddingHorizontal: 120,
        paddingVertical: 16,
    },
    navbarButton: {
        alignItems: 'flex-end',
        alignContent: 'center',
        justifyContent: 'center',
    },
    navbarTitleButton: {
        flex: 1,
        alignItems: 'flex-start'
    },
    navbarText: {
        padding: 10,
        color: '#EBF166',
        margin: 10,
        alignItems: 'flex-end',
        fontSize: 18,
        fontFamily: 'gillSans',
    },
    navbarTitle: {
        flex: 1,
        padding: 10,
        color: '#EBF166',
        alignItems: 'flex-start',
        fontSize: 40,
        fontFamily: 'evanescence',
    },
    gamebar: {
        borderWidth: 2,
        borderRadius: 14,
        borderColor: '#D38030',
        height: 75,
        backgroundColor: '#411B00',
        width: '70%',
        alignSelf: 'center',
        marginTop: 75,
        zIndex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 15
    },
    gamebarButton: {
        alignItems: 'flex-end',
        alignSelf:'center',
        justifyContent: 'flex-end',
        height: 32,
        width: 180,
    },
    gamebarButtonImage: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    }
})