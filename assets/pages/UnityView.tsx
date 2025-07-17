import React, {Fragment, useCallback, useEffect} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import {useDispatch} from "react-redux";
import {
    setMessageSender,
    setUnityIsLoaded,
    setUnityUnloader,
    updateAiTurnCount,
    updateAiName,
    updateScreenName
} from "@/assets/store/unityReducer";

const loaderUrl ='https://firebasestorage.googleapis.com/v0/b/elementstheproject.firebasestorage.app/o/Unity.loader.js?alt=media';
const dataUrl = 'https://firebasestorage.googleapis.com/v0/b/elementstheproject.firebasestorage.app/o/Unity.data?alt=media';
const frameworkUrl = 'https://firebasestorage.googleapis.com/v0/b/elementstheproject.firebasestorage.app/o/Unity.framework.js?alt=media';
const codeUrl = 'https://firebasestorage.googleapis.com/v0/b/elementstheproject.firebasestorage.app/o/Unity.wasm?alt=media';
export function UnityView() {

    const dispatch = useDispatch();


    const { unityProvider, sendMessage, isLoaded, unload, addEventListener, removeEventListener } = useUnityContext({
        loaderUrl: loaderUrl,
        dataUrl: dataUrl,
        frameworkUrl: frameworkUrl,
        codeUrl: codeUrl,
        companyName: 'Sparklmonkey Games'
    });


    const setAiTurnCount = useCallback((aiTurnCount: number) => {
        dispatch(updateAiTurnCount(aiTurnCount));
    }, []);

    const updateAiUsername = useCallback((aiName: string) => {
        dispatch(updateAiName(aiName));
    }, []);

    const setScreenName = useCallback((screenName: string) => {
        dispatch(updateScreenName(screenName));
    }, []);

    useEffect(() => {
        unloadUnity()
        addEventListener("UpdateAiUsername", updateAiUsername);
        addEventListener("UpdateAiTurnCount", setAiTurnCount);
        addEventListener("UpdateScreenName", setScreenName);
        return () => {
            removeEventListener("UpdateAiUsername", updateAiUsername);
            removeEventListener("UpdateAiTurnCount", setAiTurnCount);
            removeEventListener("UpdateScreenName", setScreenName);
        };
    }, [setAiTurnCount, updateAiUsername, isLoaded, setScreenName]);

    const unloadUnity = () => {
        dispatch(setUnityUnloader(unload));
        dispatch(setUnityIsLoaded(isLoaded));
        dispatch(setMessageSender(sendMessage));
    }
    return (
        <Fragment>
            <Unity unityProvider={unityProvider} />
        </Fragment>
    );
}