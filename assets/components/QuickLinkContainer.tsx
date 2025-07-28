import {StyleSheet, Text, View} from "react-native";
import QuickLink from "@/assets/components/QuickLink";
import * as React from "react";
import {FooterProps} from "@/assets/components/Footer";

const QuickLinkContainer = () => {

    const wikiUrl = 'https://elementscommunity.org/wiki/Main_Page';
    const forumUrl = 'https://elementscommunity.org/forum/index.php';
    const kofiUrl = 'https://ko-fi.com/sparklmonkey';

    return (
        <View style={styles.container}>
            <View style={styles.quickLinks}>
                <Text style={styles.linkTitle}>Quick Links</Text>
                <View style={styles.linkContainer}>
                    <QuickLink linkName={"About"} linkUrl={""}/>
                    <QuickLink linkName={"Account"} linkUrl={""}/>
                    <QuickLink linkName={"Wiki"} linkUrl={wikiUrl}/>
                    <QuickLink linkName={"Forum"} linkUrl={forumUrl}/>
                    <QuickLink linkName={"Support"} linkUrl={kofiUrl}/>
                    <QuickLink linkName={"Privacy Policy"} linkUrl={""}/>
                    <QuickLink linkName={"Terms of Use"} linkUrl={""}/>
                </View>
            </View>
            <View style={styles.gameLinks}>
                <Text style={styles.gamesTitle}>Games</Text>
                <View style={styles.linkContainer}>
                    <QuickLink linkName={"Elements the Revival"} linkUrl={""}/>
                    <QuickLink linkName={"Open EtG"} linkUrl={""}/>
                </View>
            </View>
        </View>
    );
};

export default QuickLinkContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 250,
        width: '20%',
        flexDirection: "row",
        gap: 48,
        justifyContent: "flex-end"
    },
    quickLinks: {
        width: 91,
        gap: 24
    },
    linkTitle: {
        fontSize: 18,
        color: "#ebf166",
        fontWeight: "600",
        textAlign: "left",
        fontFamily: "gillSans"
    },
    linkContainer: {
        gap: 16,
        alignSelf: "stretch"
    },
    gameLinks: {
        gap: 24
    },
    gamesTitle: {
        fontSize: 18,
        alignSelf: "stretch",
        color: "#ebf166",
        fontWeight: "600",
        textAlign: "left",
        fontFamily: "gillSans"
    },
})