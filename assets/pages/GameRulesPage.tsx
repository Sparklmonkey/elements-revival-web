import * as React from "react";
import { StyleSheet} from "react-native";
import GameRules from "@/assets/components/GameRules";
import BaseContainer from "@/assets/components/BaseContainer";

function GameRulesPage() {

    return (
        <BaseContainer >
            <GameRules />
    </BaseContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "rgba(50, 17, 0, 1)",
        flex: 1
    },
});

export default GameRulesPage;