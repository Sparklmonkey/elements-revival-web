import * as React from "react";
import {Image, StyleSheet, Text, View, ImageBackground, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Caretdown from "@/assets/components/caretdown"
import LeftArrow from "@/assets/components/LeftArrow";
import RightArrow from "@/assets/components/RightArrow";
import GradientText from "@/assets/components/GradientText";
import QuickLink from "@/assets/components/QuickLink";
import BulletPoint from "@/assets/components/BulletPoint";
import BackgroundDragon from "@/assets/components/BackgroundDragon";
import NavBar from "@/assets/components/NavBar";
import GameBar from "@/assets/components/GameBar";
import Footer from "@/assets/components/Footer";

const Container = () => {

    return (
        <View style={styles.container}>
                <View style={styles.view}>
                    <NavBar />
                    <GameBar />
                    <BackgroundDragon />

                    <Image style={styles.gameIconLayout} resizeMode="cover" source={require("../images/my-version.png")}/>
                    <View style={[styles.aboutGame, styles.gameBorder]}>
                        <Text style={[styles.aboutElementsThe, styles.gamesTypo]}>About Elements The Revival</Text>
                        <View style={styles.text}>
                            <View style={styles.tips}>
                                <Text style={[styles.tipsOfThe, styles.tipsOfTheTypo]}>Tips of the year</Text>
                                <Text style={[styles.yourDeckCan, styles.yourDeckCanClr]}>{`Your deck can have a minimum of 30 cards; manage your deck and customize is as soon as possible, get rid of some of cards you do not like/use and sell them. This way you can instantly have a better deck and some coins. `}</Text>
                                <Text style={[styles.elementsIsAn, styles.creaturesTypo]}>{`Elements is an online fantasy card game.
You are an elemental, a spirit composed of one of 12 Elements; Elements are the fundamental building blocks of nature. 
Each Elemental creates a deck of cards based around their core element to fight against other Elemental in a duel. Most Elementals start a duel with 100HP, once that is reduced to 0, the Elemental loses. If the Elemental runs out of cards in their deck, they also lose. 
              							There are 3 types of cards:`}</Text>
                            </View>
                            <View style={styles.tips}>
                                <BulletPoint title={"Creatures:"} description={'They are summoned to fight for the elemental; creatures have Attack, Health and may have a special skills.'} />
                                <BulletPoint title={"Spells:"} description={'Spells have an immediate effect and are discarded afterwards.'} />
                                <BulletPoint title={"Permanents:"} description={'Artifacts, weapons, shields and pillars. Card can stay in play until removed by an effect.'} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.otherGamesSection}>
                        <View style={[styles.otherGames, styles.groupFlexBox]}>
                            <Text style={[styles.otherGames1, styles.contactUs1Typo]}>Other Games</Text>
                            <View style={styles.arrows}>
                                <LeftArrow style={styles.iconLayout} width={48} height={48} />
                                <RightArrow style={styles.iconLayout} width={48} height={48} />
                            </View>
                        </View>
                        <View style={[styles.game1, styles.gameBorder]}>
                            <Image style={[styles.gamePreviewIcon, styles.gameIconLayout]} resizeMode="cover" source={require("../images/game-preview.png")} />
                            <View style={styles.gameDescription}>
                                <Text style={[styles.openetg, styles.gamesTypo]}>openEtG</Text>
                                <Text style={[styles.openetgIsA, styles.theTypo]}>OpenETG is a fast-paced, strategic online collectible card game where you build custom decks and battle against players or AI using the forces of nature and magic. I</Text>
                            </View>
                            <ImageBackground style={[styles.buttonIcon3, styles.buttonIconFlexBox]} resizeMode="cover" source={require("../images/button.png")} >
                                <Text style={[styles.wiki, styles.theTypo]}>Play Now</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <Footer />
                </View>
        </View>);
};

const styles = StyleSheet.create({
    container: {
        height: 250,
        backgroundColor: "rgba(50, 17, 0, 1)",
        flex: 1
    },
    footerChildPosition: {
        zIndex: 1,
        position: "absolute",
        transform: [
            {scaleX: -1}]
    },
    navBarSpaceBlock: {
        paddingHorizontal: 120,
        width: 1440
    },
    groupFlexBox: {
        gap: 0,
        justifyContent: "space-between"
    },
    elementsTypo1: {
        fontFamily: "evanescence",
        lineHeight: 48,
        fontSize: 40,
        color: '#EBF166',
    },
    theTypo: {
        fontFamily: "gillSans",
        textAlign: "left"
    },
    buttonIconFlexBox: {
        paddingVertical: 9,
        paddingHorizontal: 53,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    gameIconLayout: {
        maxWidth: "100%",
        overflow: "hidden"
    },
    gameBorder: {
        padding: 24,
        backgroundColor: "rgba(80, 33, 4, 1)",
        borderWidth: 2,
        borderColor: "#d38030",
        borderStyle: "solid"
    },
    gamesTypo: {
        color: "#ebf166",
        fontWeight: "600",
        textAlign: "left",
        fontFamily: "gillSans"
    },
    tipsOfTheTypo: {
        fontSize: 20,
        fontWeight: "600"
    },
    yourDeckCanClr: {
        color: "rgba(255, 255, 255, 0.75)",
        lineHeight: 23,
        fontSize: 18
    },
    creaturesTypo: {
        letterSpacing: 0.2,
        textAlign: "left",
        fontFamily: "gillSans"
    },
    contactUs1Typo: {
        fontWeight: "600",
        color: "#fff",
        textAlign: "left",
        fontFamily: "gillSans"
    },
    iconLayout: {
        borderRadius: 100,
        overflow: "hidden"
    },
    buttonFlexBox: {
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },
    sendTypo: {
        fontSize: 14,
        textAlign: "left",
        fontFamily: "gillSans"
    },
    elementsTypo: {
        fontSize: 16,
        color: "#fff",
        textAlign: "left",
        fontFamily: "gillSans"
    },
    dragonsIcon: {
        left: 0,
        zIndex: 0,
        position: "absolute"
    },
    dragonsIcon1: {
        right: 0,
        height: 997,
        top: 90,
        width: 763
    },
    elementsTheRevival: {
        textAlign: "center",
    },
    wiki: {
        textAlign: "left",
        fontSize: 18
    },
    caretdownIcon: {},
    contact: {
        gap: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    supportUs: {
        width: 88,
        textAlign: "left",
        fontSize: 18
    },
    links: {
        gap: 48,
        flexDirection: "row",
        alignItems: "center"
    },
    group: {
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
    },
    navBar: {
        borderColor: "#665533",
        borderBottomWidth: 1,
        paddingVertical: 16,
        zIndex: 2,
        borderStyle: "solid",
        paddingHorizontal: 120,
        width: 1440
    },
    version553: {
        letterSpacing: 1.4,
        fontFamily: "dauphin",
        textAlign: "left",
        fontSize: 18,
        flex: 1
    },
    trainer: {
        fontSize: 12,
        textAlign: "left"
    },
    buttonIcon: {
        width: 120,
        height: 24
    },
    gameBar: {
        backgroundColor: "#411b00",
        paddingHorizontal: 16,
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
    gameIcon: {
        height: 561,
        borderRadius: 16,
        alignSelf: "stretch",
        width: "100%",
        maxWidth: "100%"
    },
    game: {
        zIndex: 3,
        gap: 24,
        width: 1200
    },
    aboutElementsThe: {
        fontSize: 28,
        alignSelf: "stretch"
    },
    tipsOfThe: {
        color: "#fff",
        textAlign: "left",
        fontFamily: "gillSans",
        alignSelf: "stretch"
    },
    yourDeckCan: {
        textAlign: "left",
        fontFamily: "gillSans",
        alignSelf: "stretch"
    },
    elementsIsAn: {
        color: "rgba(255, 255, 255, 0.75)",
        lineHeight: 23,
        fontSize: 18,
        alignSelf: "stretch"
    },
    tips: {
        gap: 16,
        alignSelf: "stretch"
    },
    bulletIcon: {
        width: 20,
        height: 20
    },
    creatures: {
        lineHeight: 25,
        color: "#d5ce7b",
        fontSize: 20,
        fontWeight: "600",
        width: 1200
    },
    title: {
        gap: 8,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
    },
    theyAreSummoned: {
        color: "rgba(255, 255, 255, 0.75)",
        lineHeight: 23,
        fontSize: 18,
        flex: 1
    },
    subText: {
        paddingLeft: 28,
        justifyContent: "center",
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
    },
    text1: {
        alignSelf: "stretch"
    },
    text: {
        gap: 24,
        alignSelf: "stretch"
    },
    aboutGame: {
        width: 1202,
        height: 524,
        zIndex: 4,
        borderRadius: 16,
        gap: 24
    },
    otherGames1: {
        fontSize: 32,
        color: "#fff"
    },
    arrows: {
        gap: 24,
        flexDirection: "row",
        alignItems: "center"
    },
    otherGames: {
        borderRadius: 16,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
    },
    gamePreviewIcon: {
        borderRadius: 4,
        height: 180,
        alignSelf: "stretch",
        width: "100%",
        maxWidth: "100%"
    },
    openetg: {
        fontSize: 24,
        alignSelf: "stretch"
    },
    openetgIsA: {
        color: "rgba(255, 255, 255, 0.8)",
        textAlign: "left",
        fontSize: 18,
        alignSelf: "stretch"
    },
    gameDescription: {
        gap: 8,
        alignSelf: "stretch"
    },
    buttonIcon3: {
        height: 48,
        alignSelf: "stretch"
    },
    game1: {
        width: 384,
        gap: 16,
        borderRadius: 12,
        backgroundColor: "rgba(80, 33, 4, 0.25)",
        overflow: "hidden"
    },
    otherGamesSection: {
        zIndex: 5,
        gap: 24,
        width: 1200
    },
    elementsTheRevival1: {
        textAlign: "left",
        alignSelf: "stretch"
    },
    revivingTheSoul: {
        color: "rgba(255, 255, 255, 0.6)",
        textAlign: "left",
        fontSize: 18,
        alignSelf: "stretch"
    },
    socials: {
        gap: 7,
        flexDirection: "row"
    },
    contactUs1: {
        color: "#fff",
        fontSize: 18,
        alignSelf: "stretch"
    },
    enterEMailHere: {
        color: "#a2a2a2",
        flex: 1
    },
    send: {
        color: "#fff"
    },
    button: {
        width: 80,
        backgroundColor: "#d38030",
        paddingHorizontal: 8,
        paddingVertical: 10,
        justifyContent: "center"
    },
    inputArea: {
        backgroundColor: "#fff",
        paddingLeft: 12,
        paddingTop: 4,
        paddingRight: 4,
        paddingBottom: 4,
        gap: 0,
        justifyContent: "space-between",
        alignSelf: "stretch"
    },
    contactUs: {
        width: 297,
        gap: 12
    },
    elementsTheRevival2: {
        alignSelf: "stretch"
    },
    leftContainer: {
        width: 375,
        gap: 24
    },
    quickLinks1: {
        fontSize: 18
    },
    quickLinks: {
        width: 91,
        gap: 24
    },
    games: {
        fontSize: 18,
        alignSelf: "stretch"
    },
    quickLinks2: {
        gap: 24
    },
    allLinks: {
        width: 398,
        flexDirection: "row"
    },
    container1: {
        width: 1161,
        flexDirection: "row",
        zIndex: 0
    },
    footerChild: {
        width: 200,
        top: 56,
        left: 1195,
        height: 554
    },
    decorativeLineIcon: {
        width: "151.92%",
        height: "3.68%",
        top: "0%",
        right: "-25.95%",
        bottom: "96.32%",
        left: "-25.97%",
        maxHeight: "100%",
        zIndex: 2,
        position: "absolute"
    },
    footer: {
        backgroundColor: "#32241b",
        paddingVertical: 40,
        gap: 43,
        zIndex: 6,
        paddingHorizontal: 120,
        width: 1440,
        overflow: "hidden"
    },
    view: {
        height: 2237,
        gap: 40,
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "rgba(50, 17, 0, 1)",
        flex: 1
    }
});

export default Container;
