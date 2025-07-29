import * as React from "react";
import { StyleSheet, View } from "react-native";
import BackgroundDragon from "@/assets/components/BackgroundDragon";
import GameDescription from "@/assets/components/GameDescription";
import OtherGames from "@/assets/components/OtherGames";
import GameBar from "@/assets/components/gamebar/GameBar";
import { UnityView } from "@/assets/pages/UnityView";
import BaseContainer from "@/assets/components/BaseContainer";

const HomePage = () => {

    return (
        <BaseContainer>
            <GameBar />
            <BackgroundDragon />
            <View style={styles.gameIconLayout}>
                <UnityView />
            </View>
            <GameDescription />
            <OtherGames />
        </BaseContainer>
    );
};

const styles = StyleSheet.create({
    gameIconLayout: {
        width: 1237,
        height: 600,
        overflow: "hidden"
    },
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(50, 17, 0, 1)",
        flex: 1
    },
});

export default HomePage;