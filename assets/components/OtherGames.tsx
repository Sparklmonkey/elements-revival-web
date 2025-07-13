import {FlatList, Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import LeftArrow from "@/assets/svg/LeftArrow";
import RightArrow from "@/assets/svg/RightArrow";
import * as React from "react";
import GamePreviewCard from "@/assets/components/GamePreviewCard";

const OtherGamesList = [
    {
        id: '0',
        title: 'openEtG',
        pageUrl: 'https://etg.dek.im/',
        imageUrl: require('../images/game-preview.png'),
        description: 'OpenETG is a fast-paced, strategic online collectible card game where you build custom decks and battle against players or AI using the forces of nature and magic. I',
    },
    {
        id: '0',
        title: 'openEtG',
        pageUrl: 'https://etg.dek.im/',
        imageUrl: require('../images/game-preview.png'),
        description: 'OpenETG is a fast-paced, strategic online collectible card game where you build custom decks and battle against players or AI using the forces of nature and magic. I',
    },
];

const OtherGames = () => {
    return (
        <View style={styles.otherGamesSection}>
            <View style={styles.otherGames}>
                <Text style={styles.otherGames1}>Other Games</Text>
                <View style={styles.arrows}>
                    <LeftArrow style={styles.iconLayout} width={48} height={48}/>
                    <RightArrow style={styles.iconLayout} width={48} height={48}/>
                </View>
            </View>
            <FlatList
                horizontal={true}
                style={styles.otherGames}
                data={OtherGamesList}
                renderItem={({item}) => <GamePreviewCard pageUrl={item.pageUrl} title={item.title} description={item.description} imageUrl={item.imageUrl} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    wiki: {
        textAlign: "left",
        fontSize: 18,
        fontFamily: "gillSans",
    },
    buttonIcon3: {
        height: 48,
        alignSelf: "stretch",
        paddingVertical: 9,
        paddingHorizontal: 53,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    gameDescription: {
        gap: 8,
        alignSelf: "stretch"
    },
    openetgIsA: {
        color: "rgba(255, 255, 255, 0.8)",
        textAlign: "left",
        fontSize: 18,
        alignSelf: "stretch",
        fontFamily: "gillSans",
    },
    openetg: {
        fontSize: 24,
        alignSelf: "stretch",
        color: "#ebf166",
        fontWeight: "600",
        textAlign: "left",
        fontFamily: "gillSans"
    },
    otherGamesSection: {
        zIndex: 5,
        gap: 24,
        width: '70%',
    },
    otherGames: {
        borderRadius: 16,
        flexDirection: "row",
        alignSelf: "stretch",
        gap: 0,
    },
    otherGames1: {
        fontSize: 32,
        color: "#fff",
        fontWeight: "600",
        textAlign: "left",
        fontFamily: "gillSans"
    },
    arrows: {
        gap: 24,
        width: '90%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    iconLayout: {
        borderRadius: 100,
        overflow: "hidden"
    },
    game1: {
        width: 384,
        justifyContent: 'space-between',
        gap: 16,
        borderRadius: 12,
        overflow: "hidden",
        padding: 24,
        backgroundColor: "rgba(80, 33, 4, 1)",
        borderWidth: 2,
        borderColor: "#d38030",
        borderStyle: "solid"
    },
    gamePreviewIcon: {
        borderRadius: 4,
        height: 180,
        alignSelf: "stretch",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden"
    },
});
export default OtherGames;