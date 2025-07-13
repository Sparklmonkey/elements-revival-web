import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity, Linking} from "react-native";
import Caretdown from '@/assets/svg/caretdown';
import {
    createStaticNavigation,
    useNavigation,
} from '@react-navigation/native';

const NavBar = () => {
    const navigation = useNavigation();

    const wikiUrl = 'https://elementscommunity.org/wiki/Main_Page';
    const forumUrl = 'https://elementscommunity.org/forum/index.php';


    const openUrl = (url: string) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    };

    return (
        <View style={styles.navBar}>
            <View style={styles.groupFlexBox}>
                <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
                    <Text style={styles.elementsTheRevival}>Elements The Revival</Text>
                </TouchableOpacity>
                <View style={styles.links}>
                    <TouchableOpacity onPress={() => navigation.navigate('LeaderboardPage')}>
                        <Text style={styles.wiki}>Leaderboard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openUrl(wikiUrl)}>
                        <Text style={styles.wiki}>Wiki</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openUrl(forumUrl)}>
                        <Text style={styles.wiki}>Forum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('GameRulesPage')}>
                        <Text style={styles.wiki}>Game Rules</Text>
                    </TouchableOpacity>
                    <View style={styles.contact}>
                        <Text style={styles.wiki}>Contact</Text>
                        <Caretdown width={16} height={16} />
                    </View>
                    <Text style={styles.supportUs}>Support Us</Text>
                </View>
            </View>
        </View>);
};
const styles = StyleSheet.create({
    navBar: {
        borderColor: "#665533",
        borderBottomWidth: 1,
        paddingVertical: 10,
        zIndex: 2,
        borderStyle: "solid",
        paddingHorizontal: 100,
        width: '100%',
    },
    groupFlexBox: {
        gap: 0,
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
    },
    elementsTheRevival: {
        textAlign: "center",
        fontFamily: "evanescence",
        lineHeight: 48,
        fontSize: 40,
        color: '#EBF166',
    },
    links: {
        gap: 48,
        flexDirection: "row",
        alignItems: "center"
    },
    wiki: {
        color: '#EBF166',
        textAlign: "left",
        fontSize: 18,
        fontFamily: "gillSans"
    },
    contact: {
        gap: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    supportUs: {
        color: '#EBF166',
        width: 88,
        textAlign: "left",
        fontSize: 18,
        fontFamily: "gillSans"
    },
});
export default NavBar;