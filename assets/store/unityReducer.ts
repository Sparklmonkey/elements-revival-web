import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ReactUnityEventParameter} from "react-unity-webgl/distribution/types/react-unity-event-parameters";

function defaultUnload(): Promise<void> {
    return new Promise<void>((resolve) => {
        resolve();
    });
}

const initialState: UnityData = {
    messageSender: defaultMessage,
    unityUnloader: defaultUnload,
    isUnityLoaded: false,
    aiTurnCount: 0,
    aiName: "",
    screenName: "SplashScreen",
}

function defaultMessage(gameObjectName: string, methodName: string, parameter?: ReactUnityEventParameter)  {
    return;
}

export interface UnityData {
    messageSender: (gameObjectName: string, methodName: string, parameter?: ReactUnityEventParameter) => void,
    unityUnloader: () => Promise<void>,
    isUnityLoaded: boolean,
    aiTurnCount: number,
    aiName: string,
    screenName: string,
}

export const unitySlice = createSlice({
    name: 'unity',
    initialState,
    reducers: {
        setMessageSender: (state, action: PayloadAction<(gameObjectName: string, methodName: string, parameter?: ReactUnityEventParameter) => void>) => {
            state.messageSender = action.payload
        },
        setUnityUnloader: (state, action: PayloadAction<() => Promise<void>>) => {
            state.unityUnloader = action.payload
        },
        setUnityIsLoaded: (state, action: PayloadAction<boolean>) => {
            state.isUnityLoaded = action.payload
        },
        updateAiTurnCount: (state, action: PayloadAction<number>) => {
            state.aiTurnCount = action.payload
        },
        updateAiName: (state, action: PayloadAction<string>) => {
            state.aiName = action.payload
        },
        updateScreenName: (state, action: PayloadAction<string>) => {
            state.screenName = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setMessageSender, setUnityUnloader, setUnityIsLoaded, updateAiTurnCount, updateAiName, updateScreenName } = unitySlice.actions

export default unitySlice.reducer
