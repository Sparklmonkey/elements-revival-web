import * as React from "react";
import {Provider} from "react-redux";
import {store} from "@/assets/store/store";
import {View} from "react-native";
import UnityView from "@/assets/pages/UnityView";

const MobileIndex = () => {
    return (
        <Provider store={store}>
            <View style={{flex: 1, height: '100%', width: '100%'}}>
                <UnityView />
            </View>
        </Provider>
    );
}

export default MobileIndex;

