import * as React from "react";
import {Text, StyleSheet, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Caretdown from '@/assets/components/caretdown';
const NavBar = () => {
    return (
        <View style={styles.navBar}>
            <View style={styles.groupFlexBox}>
                <Text style={styles.elementsTheRevival}>Elements The Revival</Text>
                <View style={styles.links}>
                    <Text style={styles.wiki}>Wiki</Text>
                    <Text style={styles.wiki}>Forum</Text>
                    <Text style={styles.wiki}>Game Rules</Text>
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