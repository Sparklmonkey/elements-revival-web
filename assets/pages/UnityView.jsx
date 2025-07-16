import React, {Fragment, useEffect} from "react";
import { Unity, useUnityContext, UnityContext } from "react-unity-webgl";
import {useDispatch} from "react-redux";
import {setMessageSender, setUnityIsLoaded, setUnityUnloader} from "@/assets/store/unityReducer";

const loaderUrl ='https://firebasestorage.googleapis.com/v0/b/elementstheproject.firebasestorage.app/o/Unity.loader.js?alt=media';
const dataUrl = 'https://firebasestorage.googleapis.com/v0/b/elementstheproject.firebasestorage.app/o/Unity.data?alt=media';
const frameworkUrl = 'https://firebasestorage.googleapis.com/v0/b/elementstheproject.firebasestorage.app/o/Unity.framework.js?alt=media';
const codeUrl = 'https://firebasestorage.googleapis.com/v0/b/elementstheproject.firebasestorage.app/o/Unity.wasm?alt=media';
export function UnityView() {

    const dispatch = useDispatch();
    const { unityProvider, sendMessage, isLoaded, unload } = useUnityContext({
        loaderUrl: loaderUrl,
        dataUrl: dataUrl,
        frameworkUrl: frameworkUrl,
        codeUrl: codeUrl,
        companyName: 'Sparklmonkey Games'
    });

    useEffect(()=>{
        unloadUnity()
    },  [isLoaded]) // <-- empty dependency array

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